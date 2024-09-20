import { createContext, useContext } from "react";
import { Controller } from "./Controller";

const controller = new Controller();
export const storeContext = createContext<Controller>(controller);

export function useLandingContext() {
    const context = useContext(storeContext);
    if (context === null) {
        throw new Error("Store context cannot be null");
    }

    return context;
}
