import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { Question } from "./Question.tsx";
import { Header } from "./Header.tsx";
import { Result } from "./Result.tsx";

import { IWordsState } from "../types/IWordsState.ts";
import {Navigation} from "./UI/Navigation.tsx";

const App: FC = () => {
  const status = useSelector(
    (state: { words: IWordsState }) => state.words.status
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-stone-100 text-stone-200 w-screen h-screen flex flex-col justify-center items-center">
      <Header mobileMenuOpen={() => setMobileMenuOpen(true)} />
      <main className="w-full p-5 flex flex-col gap-5 justify-center items-center">
        {status === "question" && <Question />}

        {status === "result" && <Result />}
      </main>

      {mobileMenuOpen && (

        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-stone-50 ">
          <button
            className="text-indigo-700 hover:text-indigo-800 absolute top-0 right-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Navigation mainClass="flex flex-col p-10 text-2xl" />
        </div>
      )}
    </div>
  );
};

export { App };
