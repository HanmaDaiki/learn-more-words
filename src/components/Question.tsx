import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {translateWord, updateAnswer, updateStatus} from "../store/wordsSlice.ts";
import {IWordsState} from "../types/IWordsState.ts";
import {Input} from './UI/Input';
import {Button} from "./UI/Button.tsx";
import {Modal} from "./UI/Modal.tsx";

const Question: React.FC = () => {
  const dispatch = useAppDispatch();
  const stateWords = useSelector((state: { words: IWordsState }) => state.words);
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    const currentWord = stateWords.words[stateWords.indexCurrentWord];
    dispatch(translateWord({word: currentWord}));
  }, [stateWords.indexCurrentWord]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateAnswer(answer));
    dispatch(updateStatus('result'));
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <Input name="your-word" labelText="Ваше слово" disabled={true}
               defaultValue={stateWords.words[stateWords.indexCurrentWord]}/>
  
        <Input name="your-translate" labelText="Перевод" placeholder='Ваш ответ'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)} defaultValue={answer}/>
        
        
        <Button>Узнать резальтат</Button>
      </form>
    </Modal>
  );
}

export {Question};