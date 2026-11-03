import { execSync } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

// Archivos de public/ tal como los tiene git
const tracked = execSync("git -c core.quotepath=false ls-files public", { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(Boolean)
    .map((file) => file.replace(/^public/, ""));

const exact = new Set(tracked);
const lower = new Map(tracked.map((file) => [file.toLowerCase(), file]));

function walk(dir: string): string[] {
    return readdirSync(dir).flatMap((name) => {
        const full = path.join(dir, name);
        if (statSync(full).isDirectory()) return walk(full);
        return /\.(ts|tsx)$/.test(name) ? [full] : [];
    });
}

const files = ["app", "components", "lib"].flatMap(walk);
const pattern = /["'`](\/[^"'`\s$]+\.(?:png|jpe?g|webp|avif|gif|svg|mp3|glb))["'`]/gi;

let problems = 0;
for (const file of files) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(pattern)) {
        const url = match[1];
        if (exact.has(url)) continue;
        problems++;
        const hint = lower.get(url.toLowerCase());
        console.log(`${file}: ${url}  →  ${hint ? `en git es: ${hint}` : "no existe en git"}`);
    }
}
console.log(problems ? `\n${problems} ruta(s) con problema` : "Todas las rutas coinciden con git ✓");