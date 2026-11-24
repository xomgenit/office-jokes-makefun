// office-jokes-makefun — writes a single one-line office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "The only thing agile here is how fast blame moves.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

// The entry file holds the joke and nothing else: one line, under 200 characters.

