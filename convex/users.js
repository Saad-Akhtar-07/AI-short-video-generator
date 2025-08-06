
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const  CreateNewUser =mutation({
    args:{
        name:v.string(),
        email:v.string(),
        pictureUrl:v.string(),
    },
    handler: async (ctx, args) => {
        // Check if user already exists
        const users = await ctx.db.query("users", {
            filter: {
                email: args.email
            }
        });

        const user = users && users[0];

        // If user does not exist, create a new one
        if (!user) {
            const newUser = await ctx.db.insert("users", {
                name: args.name,
                email: args.email,
                pictureUrl: args.pictureUrl,
                credits: 3,
            });
            return newUser;
        }

        // If user exists, return the user
        return user;
    }
})