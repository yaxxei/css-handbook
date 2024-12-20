import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  writeFileSync,
} from "fs";
import { config } from "../config.js";
import { join } from "path";

const buildDir = config.paths.buildDir;
const stylesSrcDir = config.paths.stylesSrcDir;
const stylesBuildDir = config.paths.stylesBuildDir;
const quizzesBuildDir = config.paths.quizzesBuildDir;

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
      join(stylesBuildDir, styleFile)
    );
  });

  if (!existsSync(quizzesBuildDir)) {
    mkdirSync(quizzesBuildDir, { recursive: true });
  }

  writeFileSync(
    join(config.paths.quizzesBuildDir, "quizzes.json"),
    JSON.stringify(config.quizzes)
  );

  console.log("Styles copied successfully!");
}
