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
     
   <div className="w-full h-full flex flex-col justify-between md:overflow-hidden gap-10 ">

    <h2>favoritos</h2>

    <ul className="flex gap-3 w-full md:flex-col md:flex-wrap md:gap-12">
   
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
   

    <ul className="flex gap-3 w-full md:overflow-hidden md:flex-col md:flex-wrap md:gap-12">
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