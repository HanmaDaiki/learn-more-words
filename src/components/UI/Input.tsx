import {FC, ChangeEvent} from 'react';

interface IProps {
  labelText: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

const Input: FC<IProps> = ({labelText, onChange, disabled = false, name, defaultValue = '', placeholder}) => {
  return (
    <div className='group flex flex-col relative gap-2'>
      <label className='text-stone-700 text-xl font-bold' htmlFor={name}>{labelText}</label>
      <input
        className="p-2 text-xl group border border-stone-700 rounded-lg text-indigo-700 focus:border-indigo-700 focus:ring-1 outline-none disabled:text-center"
        name={name} placeholder={placeholder} onChange={onChange} disabled={disabled} value={defaultValue}/>
    </div>
  );
};

export {Input};