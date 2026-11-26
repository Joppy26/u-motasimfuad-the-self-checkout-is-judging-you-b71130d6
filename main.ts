import { mkdirSync, writeFileSync } from "node:fs";
// The machine keeps count, and it keeps receipts.
const LINE = "Beep. Item three hundred and one: one baguette. The rest of your basket is crisps, shopper, and the machine is not convinced.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
