import { createContext, useContext, useState } from "react";

export const FirebaseContext = createContext(null)

export const AuthContext = createContext(null);

export const ProductContext = createContext(null)


export default function Comtext ({children}){
    const [user,setUser] = useState(null)
    const [product,productDetails] = useContext(ProductContext)
    return(
        <ProductContext.Provider value={{product,productDetails}}> 
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
        </ProductContext.Provider>
    )
}