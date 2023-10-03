import Logo from "./../../assets/noteblock.png";
import { AiOutlineSearch } from "react-icons/ai"


export const Header = () => {
   
 
   return (
      <>
        <header className="h-full shadow-bottom w-full flex justify-evenly sticky items-center px-10 top-0 right-0 left-0 z-10">
          <div className="container mx-auto pl-4 pr-4 h-full flex flex-start items-center rounded-sm">
            <img
              src={Logo}
              alt="Logo"
            />
            <h2 className="lg-sm">CoreNotes</h2>
            <div className="flex flex-end ml-2 sm:w-25 md:w-30 h-5 rounded-sm shadow-md">
            <input className="border-none outline-none sm:w-25 p-2" type="text"/>
            <AiOutlineSearch/>
            </div>
          </div>
            

          <button className="bg-White color-black border-none">X</button> 

        </header>
      </>
    );
  };