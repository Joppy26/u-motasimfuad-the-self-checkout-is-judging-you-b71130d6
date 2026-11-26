import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Twelve yoghurts, zero vegetables. The till has scanned many baskets, shopper, and this one just made it sigh.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
