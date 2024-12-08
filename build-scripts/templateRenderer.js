import { paths, chapters, title } from "../config.js";
import { parseMarkdown } from "./parser.js";
import { readFileSync } from "fs";
import { join } from "path";

const template = readFileSync(paths.templatePath, "utf-8");

export function renderHtml(file) {
  const filePath = join(paths.contentDir, file);
  const markdown = readFileSync(filePath, "utf-8") + "\n";

  const outputFilename = file.replace(".md", ".html");
  const htmlContent = parseMarkdown(markdown);
  const pageChapter = markdown.split("\n")[0].replace("##", "").trim();
  const htmlChapters = getChaptersHtml(chapters);

  return (
    template
      .replace("{{content}}", htmlContent)
      .replace("{{title}}", title)
      .replace("{{chapter}}", pageChapter)
      .replace("{{chapters}}", htmlChapters)
      // highlighiting(adding active class) current page chapter in list
      .replace(
        new RegExp(`<li(?:\\s[^>]*)?>\\s*<a\\s+href="${outputFilename}"`, "g"),
        `<li class="active"><a href="${outputFilename}"`
      )
  );
}

function getChaptersHtml(chapters) {
  const createList = (chapterObj, isOrdered) => {
    const items = Object.entries(chapterObj).map(([id, value]) => {
      if (typeof value === "object" && value.children) {
        return `
          <li>
            <a href="${id}.html">${value.name}</a>
          </li>
          <ol>
            ${createList(value.children, true)}
          </ol>
        `;
      }
      return `
        <li>
          <a href="${id}.html">${value}</a>
        </li>
      `;
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

  // Генерируем списки
  const unorderedHtml = createList(unorderedChapters, false);
  const orderedHtml = createList(orderedChapters, true);

  return `
    ${unorderedHtml}
    ${orderedHtml}
  `;
}
