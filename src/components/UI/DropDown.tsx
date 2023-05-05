import {FC, ReactNode, useState} from 'react';

interface IProps {
  disabled?: boolean;
  children: ReactNode,
  list: string[]
}

const DropDown: FC<IProps> = ({disabled = false, children, list}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button disabled={disabled} id="dropdownDefaultButton"
              className="w-full bg-indigo-700 hover:bg-indigo-800 py-2 rounded-lg text-xl text-stone-50"
              type="button" onClick={() => setIsOpen(!isOpen)}>{children}
      </button>
      {
        isOpen &&
      <div
        className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {
            list.map((item, index) => {
              return <li key={index}
                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}
              </li>
            })
          }

        </ul>
      </div>
       }
    </div>

  )
    ;
};

export {DropDown};