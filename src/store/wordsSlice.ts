import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {IWordsState} from "../types/IWordsState.ts";
import {getRandomWords} from "../utils/getRandomWords.ts";
import {TTranslateWord} from "../types/TTranslateWord.ts";

const translateWord = createAsyncThunk('wordsSlice/getTranslateWord', async (data: {
  word: string
}, {rejectWithValue}) => {
  const url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';
  const key = 'dict.1.1.20230504T175003Z.92807fd4c39da29a.ebd4398c6b3d9c9ed3356c4356886cf2d7bbc0e2'
  const lang = 'en-ru';

  try {
    const response = await fetch(`${url}?key=${key}&lang=${lang}&text=${data.word}`);

    if (response.ok) {
      return response.json()
    }

    return Promise.reject(response.status);
  } catch (err) {
    return rejectWithValue(err);
  }
});

const initialState: IWordsState = {
  words: getRandomWords(10),
  indexCurrentWord: 0,
  translateCurrentWord: [],
  status: 'question',
  answer: ''
};

const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload;
    },
    updateAnswer(state, action) {
      state.answer = action.payload;
    },
    nextWord(state) {
      state.indexCurrentWord += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(translateWord.fulfilled, (state, action) => {
      state.translateCurrentWord = [];
      action.payload.def.forEach((item: { tr: Array<TTranslateWord> }) => {
        item.tr.forEach((word) => {
          state.translateCurrentWord = [...state.translateCurrentWord, word.text];
          if (word.syn) {
            word.syn.forEach((synWord) => {
              state.translateCurrentWord = [...state.translateCurrentWord, synWord.text];
            })
          }
        })
      })
    })
  }
});

const wordsSliceReducer = wordsSlice.reducer;
const { updateStatus, updateAnswer, nextWord } = wordsSlice.actions;

export {wordsSliceReducer, updateStatus, updateAnswer, nextWord, translateWord};