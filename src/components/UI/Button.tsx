import {FC, ReactNode} from 'react';

interface IProps {
  disabled?: boolean;
  children: ReactNode
}

const Button: FC<IProps> = ({disabled = false, children}) => {
  return (
    <button className='bg-indigo-700 hover:bg-indigo-800 p-2 rounded-lg text-xl text-stone-50' type='submit' disabled={disabled}>{children}</button>
  );
};

export {Button};