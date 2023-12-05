import { createContext, useContext, useState } from "react";

const Context = createContext();

export function RoleTypeProvider({ children }) {
    const [roleType, setRoleType] = useState("consultant");
    return (
        <Context.Provider value={[roleType, setRoleType]}>{children}</Context.Provider>
    );
}

export function useRoleTypeContext() {
    return useContext(Context);
}