import { readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { renderHtml } from "./build-scripts/templateRenderer.js";
import { config } from "./config.js";
import { createBuildDir } from "./build-scripts/buildDirCreator.js";

const contentDir = config.paths.contentDir;
const buildDir = config.paths.buildDir;

const files = readdirSync(contentDir);

createBuildDir();

files.forEach((file) => {
  const outputFilename = file.replace(".md", ".html");
  const pageHtml = renderHtml(file);

  writeFileSync(join(buildDir, outputFilename), pageHtml);
  console.log(`Generated: ${outputFilename}`);
});

console.log("All pages generated successfully!");
