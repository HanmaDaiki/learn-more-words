import {db} from "./dataWithWords.ts";

import {TWords} from "../types/TWords.ts";

const getRandomWords = (wordCount: number): TWords => {
  return db.sort(() => Math.random() - 0.5).slice(0, wordCount);
};

export { getRandomWords };