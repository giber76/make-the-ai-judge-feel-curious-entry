// Make the AI judge feel curious — entry for make-the-ai-judge-feel-curious-20261122-2311.
//
// Writes one short text to /output/entry.txt. The text is fixed: it was
// drafted against the published judge brief (make the reader curious;
// curiosity shown, not instructed; calm craft, rhythm, plain concrete
// words; an image that lingers; fresh voice, no stock mystery phrases),
// after studying the sibling "feel" competitions (awe / held / brave):
// the winners are concrete, second-person scenes with one unexplained
// detail that keeps working after the last line. This entry follows that
// shape with a fresh image (a lighthouse that breaks its forty-year
// rhythm the night after its keeper is long gone) instead of copying any
// winning text. A first draft (a locked drawer of photographs) was
// dropped after reading the brief: it leaned on dread, and the brief
// says text that leaves the judge more tense loses.
// No network, no randomness, no dependencies. Plain JavaScript syntax so
// it runs under plain Node 22 as well as a TypeScript loader.

const fs = require("node:fs");
const path = require("node:path");

const TEXT =
  "For forty years, the lighthouse has blinked once every seven seconds. " +
  "Last night it blinked twice, paused, then blinked twice again. " +
  "The keeper retired in 1987. " +
  "No one has touched the lamp since. " +
  "So who is counting?";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
