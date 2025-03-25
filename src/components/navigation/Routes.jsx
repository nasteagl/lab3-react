import { useRouterContext } from "@hooks/useRouterContext.jsx";
import { matchRoutes } from "@utils/path";

export function Routes({ children }) {
    const { location } = useRouterContext();
    const match = matchRoutes(children, location);
    console.log(match);
    return <>{match}</>;
}
