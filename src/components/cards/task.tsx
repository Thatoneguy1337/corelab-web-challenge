import {BsFillPencilFill} from "react-icons/bs";
import {LuPaintBucket} from "react-icons/lu";
import { apiLocal } from "../../services/api";
import {AiOutlineStar} from "react-icons/ai"

interface CardProps {
    id: number;
    title: string;
    description: string;
    color: string;
    is_favorite:boolean;
  }




  export const TaskCard = ({
    id,
    title,
    description,
    color
  }: CardProps) => {

   
    
    const taskDelete = async (id:number) => {
        try {
          await apiLocal.delete(`/task/${id}`);
        } catch (error) {
          console.log(error)
        }
      };
    
      


   return(

    <div className="w-60 h-120 flex flex-col over-flow-auto h-40 ml-20 rounded-lg shadow-lg " style={{backgroundColor: color}}>
        <div className=" w-full h-20 flex flex-col justify-evenly h-full">
            <div className=" w-full relative flex justify-between border-b-2 flex  p-2 gap-2">
             <h2>{title}</h2> 
             <button className="bg-White color-black border-none"><AiOutlineStar/></button> 
            </div>
            <div className="relative flex flex-col gap-2 border-none">
             <p>{description}</p>
            </div>
        </div>
    
    
    
      <footer className="w-full flex justify-between align-center p-10">
        <div className="w-12 flex gap-4">
        <button className="bg-White color-black border-none"value={id}><BsFillPencilFill/></button>
        <button className="bg-White color-black border-none"value={id}><LuPaintBucket className="color-Yellow"/></button>
        </div>
        <button className="bg-White color-black border-none" onClick={()=>taskDelete(id)} value={id}>X</button>
     </footer>
    
    </div>

   )


  }  













