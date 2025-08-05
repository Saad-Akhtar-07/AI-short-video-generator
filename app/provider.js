"use client"
import React, { useEffect, useState, useContext } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { auth } from "../configs/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {AuthContext} from "./_context/AuthContext"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";





function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [user, setUser] = useState();
    const createUser = useMutation(api.user.CreateNewUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) { 
                setUser(user);
                try {
                    await createUser({
                      name: user.displayName || "",
                      email: user.email || "",
                      pictureUrl: user.photoURL || "", 
                    });
                  } catch (error) {
                    console.error("Error creating user:", error);
                  }

                
                    }
            })
            return () => unsubscribe();
        }, [])
  return (
    <ConvexProvider client={convex}>
    <AuthContext.Provider value={{user}}>
    <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange>
        {children}
    </NextThemesProvider>
    </AuthContext.Provider>
    </ConvexProvider>    
  )
}
export const useAuthContext = () =>{
    const context = useContext(AuthContext);
    return context;
}
    
export default Provider