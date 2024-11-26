const fs = require("fs");
const path = require("path");
const marked = require("marked");

const srcDir = path.join(__dirname, "src");
const stylesSrcDir = path.join(srcDir, "assets/styles");
const contentDir = path.join(srcDir, "contents");
const buildDir = path.join(__dirname, "build");
const stylesBuildDir = path.join(buildDir, "assets/styles");

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

if (!fs.existsSync(stylesBuildDir)) {
  fs.mkdirSync(stylesBuildDir, { recursive: true });
}

fs.readdirSync(stylesSrcDir).forEach((styleFile) => {
  fs.copyFileSync(
    path.join(stylesSrcDir, styleFile),
    path.join(stylesBuildDir, styleFile)
  );
});

console.log("Styles copied successfully!");

const template = fs.readFileSync(
  path.join(srcDir, "templates", "layout.html"),
  "utf-8"
);

const files = fs.readdirSync(contentDir);

files.forEach((file) => {
  const filePath = path.join(contentDir, file);
  const markdown = fs.readFileSync(filePath, "utf-8") + "\n";

  const htmlContent = marked.parse(markdown, {
    walkTokens(token) {
      if (token.type === "paragraph" && typeof token.raw === "string") {
        if (token.raw.startsWith("::note") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::note", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="note">
            <p>${content}</p>
          </div>`;
        }
        if (token.raw.startsWith("::warning") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::warning", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="warning">
            <p>${content}</p>
          </div>`;
        }
        if (token.raw.startsWith("::tip") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::tip", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="tip">
            <p>${content}</p>
          </div>`;
        }
      }
    },
  });

  const outputFilename = file.replace(".md", ".html");

  // const pageTitle = template.match(new RegExp(`<a href="${outputFilename}".*?>(.*?)</a>`, "i"))[i] ?? "Untitled Page";
  const pageTitle = markdown.split("\n")[0].replace("#", "").trim();

  const pageHtml = template
    .replace("{{content}}", htmlContent)
    .replace("{{title}}", pageTitle)
    // highlighiting(adding active class) current page chapter in list
    .replace(
      new RegExp(`<li(?:\\s[^>]*)?>\\s*<a\\s+href="${outputFilename}"`, "g"),
      `<li class="active"><a href="${outputFilename}"`
    );

  fs.writeFileSync(path.join(buildDir, outputFilename), pageHtml);
  console.log(`Generated: ${outputFilename}`);
});

console.log("All pages generated successfully!");
