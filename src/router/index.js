import InfinitasHome from "../pages/Home";
import RGB from "../pages/RGB";
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
]
