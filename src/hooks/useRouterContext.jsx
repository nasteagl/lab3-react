import { useContext } from "react";
import { RouterContext } from "@context/RouterContext";

export function useRouterContext() {
    return useContext(RouterContext);
}
