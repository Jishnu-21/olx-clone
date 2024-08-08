import { createContext, useContext, useState } from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);
export const ProductContext = createContext(null);

export default function Context({ children }) {
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null); // Create state for product

    return (
        <ProductContext.Provider value={{ product, setProduct }}> 
            <AuthContext.Provider value={{ user, setUser }}>
                {children}
            </AuthContext.Provider>
        </ProductContext.Provider>
    );
}
