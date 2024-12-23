import { config } from "../config.js";
import { parseMarkdown } from "./parser.js";
import { readFileSync } from "fs";
import { join } from "path";

const template = readFileSync(config.paths.templatePath, "utf-8");

export function renderHtml(file) {
  const filePath = join(config.paths.contentDir, file);
  const markdown = readFileSync(filePath, "utf-8") + "\n";

  const htmlContent = parseMarkdown(markdown);
  const pageHeading = markdown.split("\n")[0];
  const pageChapter = pageHeading.replace(/^(#|##) /, "").trim();

  const htmlChapters = getChaptersHtml(
    config.chapters,
    file.replace(".md", "")
  );

  return template
    .replace("{{content}}", htmlContent)
    .replace("{{title}}", config.title)
    .replace("{{chapter}}", pageChapter)
    .replace("{{chapters}}", htmlChapters);
}

function getChaptersHtml(chapters, currentFileName) {
  const createList = (chapterObj, isOrdered) => {
    const items = Object.entries(chapterObj).map(([id, value]) => {
      let subItems = "";

      if (typeof value === "object" && value.children) {
        subItems = createList(value.children, true);
      }

      const isActive = currentFileName === id ? "active" : "";
      const isQuiz = id.includes("quiz") ? "quiz-chapter" : "";

      const sectionHtml = `
        <li class="${isActive} ${isQuiz}">
          <a href="${id}.html">${value.name || value}</a>
          ${subItems}
        </li>
      `;

      return sectionHtml;
    });

    const listTag = isOrdered ? "ol" : "ul";
    return `<${listTag}>\n${items.join("\n")}\n</${listTag}>`;
  };

  const unorderedChapters = {};
  const orderedChapters = {};

  Object.entries(chapters).forEach(([id, value]) => {
    if (id.startsWith("00")) {
      unorderedChapters[id] = value;
    } else {
      orderedChapters[id] = value;
    }
  });

  const unorderedHtml = createList(unorderedChapters, false);
  const orderedHtml = createList(orderedChapters, true);

  return `
    ${unorderedHtml}
    ${orderedHtml}
  `;
}
