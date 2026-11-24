// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to <output dir>/entry.txt. Node standard library only; deterministic.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: I'm the fern in the corner. Unwatered since March, still alive out of spite. I'll reply when it rains.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
writeFileSync(target, LINE + "\n", "utf8");
try {
  chmodSync(target, 0o644);
} catch {
  // Best effort only; the grader runs as another user.
}
console.log(`Wrote ${target} (${LINE.length} characters)`);
