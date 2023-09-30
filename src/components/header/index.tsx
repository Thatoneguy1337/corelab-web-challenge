import { useState } from "react";
import "./../../assets/noteblock.png";



export const Header = () => {
   
    const getInitials = (name: string) => {
      if (name) {
        const names = name.split(" ");
        if (names.length === 1) {
          return names[0].charAt(0).toUpperCase();
        } else if (names.length > 1) {
          const firstInitial = names[0].charAt(0).toUpperCase();
          const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
          return `${firstInitial}${lastInitial}`;
        }
      }
      return "";
    };
  
    return (
      <>
        <header className="bg-grey10 text-white h-20 shadow-bottom relative sticky top-0 right-0 left-0 z-10">
          <div className="container mx-auto pl-4 pr-4 h-full flex justify-between items-center">
            <img
              src={"./../../assets/noteblock.png"}
              alt="Logo"
            />
  
           </div>
          
        </header>
      </>
    );
  };



