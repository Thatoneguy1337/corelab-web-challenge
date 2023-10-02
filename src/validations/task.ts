import {z} from "zod"


export const taskSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
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
  });

export const taskEditSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
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


export type taskData = z.infer<typeof taskSchema>;
export type taskEdit = z.infer<typeof taskEditSchema>;






