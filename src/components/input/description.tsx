import { ReactNode } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: "text" ;
  defaultValue?: string;
  register?: object;
  error?: ReactNode
}


export const InputDescription = ({ id, type, placeholder, defaultValue, register, error  }: InputProps) => {
    return (
      <fieldset className="relative flex flex-col gap-2 border-none">
        <input
          className="h-12 w-full shadowbottom outline-none rounded-4 px-4"
          type={type}
          placeholder={placeholder}
          id={id}
          defaultValue={defaultValue}
          {...register}
        />
        {error}
      </fieldset>
    );
  }
