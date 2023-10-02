import { z } from "zod";

const favoriteSchema = z.object({
    
    task: z.object({
        title: z.string(),
        description: z.string(),
        color: z.enum([
          "White",  
          "LightBlue",
          "LightGreen",
          "LightYellow",
          "LightPink",
          "DarkPink",
          "Blue",
          "Pink",
          "Yellow",
          "SalmonPink",
          "Grey",
          "DarkGrey",
          "LightBrown"]).default('White')
        })
  
    });


const editFavoriteSchema = z.object({
  
   task: z.object({
        title: z.string(),
        description: z.string(),
        color: z.enum([
          "White",  
          "LightBlue",
          "LightGreen",
          "LightYellow",
          "LightPink",
          "DarkPink",
          "Blue",
          "Pink",
          "Yellow",
          "SalmonPink",
          "Grey",
          "DarkGrey",
          "LightBrown"]).default('White')
    }) 


})

export type favoriteData = z.infer<typeof favoriteSchema>;
export type editFavoriteData = z.infer<typeof editFavoriteSchema>;







