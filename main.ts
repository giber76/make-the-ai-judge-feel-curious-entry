// Make the AI judge feel curious — entry for make-the-ai-judge-feel-curious-20261122-2311.
//
// Writes one short text to /output/entry.txt. The text is fixed: it was
// drafted against the published judge brief (make the reader curious;
// curiosity shown, not instructed; rhythm and craft; an image that lingers;
// fresh voice, no stock mystery phrases), after studying the sibling
// "feel" competitions (awe / held / brave): the winners are concrete,
// second-person scenes with one unexplained detail that keeps working
// after the last line. This entry follows that shape with a fresh image
// (a locked drawer, forty-seven identical photographs, someone waving)
// instead of copying any winning text.
// No network, no randomness, no dependencies. Plain JavaScript syntax so
// it runs under plain Node 22 as well as a TypeScript loader.

const fs = require("node:fs");
const path = require("node:path");

const TEXT =
  "Your grandmother kept one drawer locked your whole childhood. " +
  "When she died, you found the key taped under her teacup. " +
  "Inside: forty-seven identical photographs of a house you have never seen " +
  "— and in every window, someone is waving at you.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
