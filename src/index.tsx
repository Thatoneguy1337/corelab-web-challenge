import { Header } from "./components/header";
import { Container } from "./components/container";
import {
   useState,
   useEffect,
 } from "react";
import { apiLocal } from "./services/api";
import { TaskCard } from "./components/cards/task";





interface taskProps {
   id: number;
   title: string;
   description: string;
   color: string;
   is_favorite: boolean;
}



export const Home = () => {
   const [task, setTask] = useState<taskProps[]>([]);
    useEffect(() => {
     (async () => {
       try {
         const response = await apiLocal.get(`/task`);
         const task = response.data;
         setTask(task);
       } catch (error) {
         console.log(error);
       }
     })();
   }, []);

   return (
    <>  
    <Header/>
    <Container/>
     
   <div className="pl-4 pr-4 h-full flex flex-col justify-between md:overflow-hidden gap-10 items-center">

    <h2>favoritos</h2>

    <ul className="flex gap-3 w-full overflow-scroll md:overflow-hidden md:flex-wrap md:gap-12">
   
    {task.map((fav) => {
        if (fav.is_favorite) {
          return (
           <TaskCard key={fav.id} id={fav.id} title={fav.title} description={fav.description} color={fav.description} is_favorite={fav.is_favorite} />
          );
        }
        return null; 
      })}
    
    </ul>

   <h2>tarefa</h2> 
   

    <ul className="flex gap-3 w-full overflow-scroll md:overflow-hidden md:flex-wrap md:gap-12">
    {  task.map((fav) => {
        if (fav.is_favorite == false) {
          return (
           <TaskCard key={fav.id} id={fav.id} title={fav.title} description={fav.description} color={fav.description} is_favorite={fav.is_favorite} />
          );
        }
        return null; 
      })}
     </ul>
    </div> 
    </>
   ) 
};