import { ReactNode } from "react";
import {AiOutlineStar} from "react-icons/ai"

interface InputProps {
  id: string;
  placeholder: string;
  type: "text" ;
  defaultValue?: string;
  error?: ReactNode
  register?: object;
}


export function InputTitle({ id, type, placeholder, defaultValue, error, register }: InputProps) {
    return (
      <fieldset className="relative border-b-2 flex justify-between px-2 gap-2">
        <input
          className="h-12 w-30  outline-none rounded-4   px-4"
          type={type}
          placeholder={placeholder}
          id={id}
          defaultValue={defaultValue}
          {...register}
         
          />
        {error}
        <button className=""><AiOutlineStar/></button> 
      </fieldset>
    );
  }





