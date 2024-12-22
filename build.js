import { copyFileSync, readdirSync, writeFileSync } from "fs";
import { basename, join } from "path";
import { renderHtml } from "./build-scripts/templateRenderer.js";
import { config } from "./config.js";
import { createBuildDir } from "./build-scripts/buildDirCreator.js";

const indexHtml = config.paths.indexHtmlDir;
const contentDir = config.paths.contentDir;
const buildDir = config.paths.buildDir;

const files = readdirSync(contentDir);

createBuildDir();

files.forEach((file) => {
  const outputFilename = file.replace(".md", ".html");
  const pageHtml = renderHtml(file);

  writeFileSync(join(buildDir, outputFilename), pageHtml);
  copyFileSync(indexHtml, join(buildDir, basename(indexHtml)));
  console.log(`Generated: ${outputFilename}`);
});

console.log("All pages generated successfully!");
