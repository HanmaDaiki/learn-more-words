import {FC, PropsWithChildren} from "react";

const Modal: FC<PropsWithChildren> = ({children}) => {
  return(
    <div className="bg-stone-50 px-8 py-7 drop-shadow-xl rounded-2xl">{children}</div>
  );
};

export {Modal};