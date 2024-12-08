import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { paths } from "../config.js";
import { join } from "path";

const buildDir = paths.buildDir;
const stylesSrcDir = paths.stylesSrcDir;
const stylesBuildDir = paths.stylesBuildDir;

export function createBuildDir() {
  if (!existsSync(buildDir)) {
    mkdirSync(buildDir, { recursive: true });
  }

  if (!existsSync(stylesBuildDir)) {
    mkdirSync(stylesBuildDir, { recursive: true });
  }

  readdirSync(stylesSrcDir).forEach((styleFile) => {
    copyFileSync(
      join(stylesSrcDir, styleFile),
      join(stylesBuildDir, styleFile),
    );
  });

  console.log("Styles copied successfully!");
}
