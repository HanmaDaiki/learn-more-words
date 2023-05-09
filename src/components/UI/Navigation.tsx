import {FC, Fragment} from 'react';
import {Popover, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

interface IProps {
  mainClass: string;
}

const Navigation: FC<IProps> = ({ mainClass }) => {
  return (
    <Popover.Group className={mainClass}>
      <Popover>
        <Popover.Button
          className="flex items-center text-xl gap-2 text-indigo-700 hover:text-indigo-900">Количество слов <ChevronDownIcon
          className="h-5 w-5 flex-none mt-1"/></Popover.Button>

        <Transition as={Fragment} enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
          <Popover.Panel className="absolute bg-stone-50 p-3 drop-shadow-xl rounded-2xl text-xl text-indigo-700 hover:text-indigo-900 flex flex-col">
            <button>10 Слов</button>
            <button>20 Слов</button>
            <button>30 Слов</button>
            <button>40 Слов</button>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};

export {Navigation};