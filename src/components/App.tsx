import {Question} from "./Question.tsx";
import {useSelector} from "react-redux";
import {IWordsState} from "../types/IWordsState.ts";
import {Result} from "./Result.tsx";
import { Header } from "./Header.tsx";

const App: React.FC = () => {
  const status = useSelector((state: { words: IWordsState}) => state.words.status);
  
  return (
    <div className="bg-stone-100 text-stone-200 w-screen h-screen flex flex-col justify-center items-center">
      <Header />
      <main className="w-full p-5 flex flex-col gap-5 justify-center items-center">
        {
          status === 'question' && <Question />
        }
        
        {
          status === 'result' && <Result />
        }
      </main>
    </div>
  );
};

export {App};