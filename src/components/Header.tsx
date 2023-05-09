import {FC} from 'react';
import { Bars3Icon } from "@heroicons/react/20/solid";
import {Navigation} from "./UI/Navigation.tsx";

interface IProps {
  mobileMenuOpen: () => void
}

const Header: FC<IProps> = ({ mobileMenuOpen }) => {
  return (
    <header className="absolute px-10 py-2 top-0 w-full bg-stone-50 border-b border-stone-300 drop-shadow-md flex items-center justify-between">
      <span className="text-indigo-700 text-2xl">Learn More Words</span>
      <button className="text-indigo-700 hover:text-indigo-900 md:hidden" onClick={mobileMenuOpen}><Bars3Icon className="h-6 w-6" aria-hidden="true" /></button>
      <Navigation mainClass="hidden md:flex" />
    </header>
  )
}
export {Header};