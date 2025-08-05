
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const  CreateNewUser =mutation({
    args:{
        name:v.string(),
        email:v.string(),
        pictureUrl:v.string(),

    },
    handler:async(ctx,args)=>{
        //if user already exists
        const user = await ctx.db.query("users",{
            filter:{
                email:args.email
            }

        })

        //if not user 
        if(!user[0].email){
            const newUser = await ctx.db.create("users",{
                name:args.name,
                email:args.email,
                pictureUrl:args.pictureUrl,
                credits: 3,
            })
            return newUser;
        }


        return user[0];
       
    }
})