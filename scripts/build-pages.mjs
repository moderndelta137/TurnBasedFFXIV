import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outDir = join(root, "dist");

const staticPaths = [
  "index.html",
  "data",
  "assets"
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const source of staticPaths) {
  await cp(join(root, source), join(outDir, source), { recursive: true });
}

await writeFile(join(outDir, ".nojekyll"), "");

console.log(`Built GitHub Pages artifact -> ${outDir}`);
