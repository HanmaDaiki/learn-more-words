import {FC} from 'react';

const Header: FC = () => {
  return (
    <header className="absolute px-10 py-2 top-0 w-full bg-stone-50 border-b border-stone-300 drop-shadow-md">
      <span className="text-indigo-700 text-2xl">Learn More Words</span>
    </header>
  )
}
export {Header};