import { useRouter } from "next/router";
import { useEffect, useContext, useState, createContext } from "react";

const Context = createContext();

const Provider = ({children}) => {
    const router = useRouter();
    const userDetails = {
        user: router.query
    }
    console.log(userDetails, 'contexthome')
    return <Context.Provider value={userDetails}>{children}</Context.Provider>
}

export const useUserDetails = () => useContext(Context)

export default Provider