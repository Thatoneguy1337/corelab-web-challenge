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


export const InputTitle = ({ id, type, placeholder, defaultValue, error, register }: InputProps)=>{
    return (
      <fieldset className=" w-full relative border-b-2 flex  p-2 gap-2">
        <input
          className="h-12 w-full  outline-none rounded-4   px-4"
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





