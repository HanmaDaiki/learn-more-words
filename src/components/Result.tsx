import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {IWordsState} from "../types/IWordsState.ts";
import {useEffect, useState} from "react";
import {nextWord, updateStatus} from "../store/wordsSlice.ts";
import {Input} from "./UI/Input";
import { Modal } from "./UI/Modal";
import { Button } from "./UI/Button";
import {DropDown} from "./UI/DropDown.tsx";

const Result: React.FC = () => {
  const dispatch = useAppDispatch();
  const stateWords = useSelector((state: { words: IWordsState }) => state.words);
  
  const [result, setResult] = useState<boolean>(false);
  
  useEffect(() => {
    setResult(stateWords.translateCurrentWord.includes(stateWords.answer.toLowerCase()));
    }, [])
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    dispatch(nextWord());
    dispatch(updateStatus('question'));
  }
  
  return(
    <Modal>
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Input name="your-answer" labelText="Ваш ответ" disabled={true} defaultValue={stateWords.answer} />
      <Input name="your-result" labelText="Результат" disabled={true} defaultValue={result ? 'Верно' : 'Не верно'} />
      
      
      <DropDown list={stateWords.translateCurrentWord}>Правильные ответы</DropDown>
      
      <Button>Продолжить</Button>
    </form>
    </Modal>
  );
}

export { Result };