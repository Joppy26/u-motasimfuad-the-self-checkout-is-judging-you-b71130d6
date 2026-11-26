import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Twelve yoghurts, zero vegetables. I have scanned a thousand baskets, shopper, and yours just filed for a salad intervention.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
