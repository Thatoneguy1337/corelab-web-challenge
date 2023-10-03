import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTitle, InputDescription } from "../input";
import { taskData, taskSchema } from "../../validations/task";
import { apiLocal } from "../../services/api";

export const Container = ()=>{


 const taskRegister = async (data: taskData) => {
    try {
      await apiLocal.post("/task", data);
    } catch (error) {
      console.log(error)
    }
  };

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskData>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
  });

return(
 <main className="w-full h-2/4 flex items-center justify-center content-center flex-column p-10">
    <div className="w-80 flex items-center h-40 ml-20 rounded-lg shadow-lg">
    <form onSubmit={handleSubmit(taskRegister)} className="flex flex-col justify-evenly h-full">
        <InputTitle
                id="title"
                placeholder="Titulo"
                register={register("title")}
                type="text"
                error={
                  errors.title?.message && (
                    <span className="span-error">{errors.title.message}</span>
                )}
              /> 
         <InputDescription 
                id="description"
                placeholder="descrição"
                register={register("description")}
                type="text"
                error={
                  errors.description?.message && (
                    <span className="span-error">{errors.description.message}</span>
                )}/>      
    </form>    
    </div> 
 </main>
);

}






