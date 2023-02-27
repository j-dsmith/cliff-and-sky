import { FC, ReactNode } from "react";

interface Props {
  message: string;
}
const InputErrorMessage: FC<Props> = ({ message }) => {
  return (
    <div className="absolute z-50 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 p-4">
      <p className="text-slate-400">{message}</p>
    </div>
  );
};
export default InputErrorMessage;
