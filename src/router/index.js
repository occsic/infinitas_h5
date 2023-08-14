import InfinitasHome from "../pages/Home";
import RGB from "../pages/RGB";
import Network from "../pages/Network";
import ZkSnark from "../pages/ZkSnark";
export default [
    {
        path: '/',
        exact: true,
        main: <InfinitasHome />
    },
    {
        path: '/home',
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
        main: <Network />
    },
    {
        path: 'zksnark',
        exact: true,
        main: <ZkSnark />
    },

]
