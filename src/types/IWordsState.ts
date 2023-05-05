import {TWords} from "./TWords.ts";

export interface IWordsState {
  words: TWords;
  translateCurrentWord: string[];
  indexCurrentWord: number;
  answer: string;
  status: 'question' | 'result';
}