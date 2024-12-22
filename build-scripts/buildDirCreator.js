import { copyFileSync, existsSync, mkdirSync, readdirSync, cpSync } from "fs";
import { config } from "../config.js";
import { join } from "path";

const buildDir = config.paths.buildDir;
const assetsSrcDir = config.paths.assetsSrcDir;
const assetsBuildDir = config.paths.assetsBuildDir;

export function createBuildDir() {
  if (!existsSync(buildDir)) {
    mkdirSync(buildDir, { recursive: true });
  }

  if (!existsSync(assetsBuildDir)) {
    mkdirSync(assetsBuildDir, { recursive: true });
  }

  cpSync(assetsSrcDir, assetsBuildDir, { recursive: true });

  console.log("Styles copied successfully!");
}
