import InfinitasHome from "../pages/Home";
import RGB from "../pages/RGB";
import Network from "../pages/Network";
export default [
    {
        path: '/',
        exact: true,
        main: <InfinitasHome />
    },
    {
        path: 'rgb',
        exact: true,
        main: <RGB />
    },
    {
        path: 'network',
        exact: true,
        main: <RGB />
    },
]
