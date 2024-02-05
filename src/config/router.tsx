import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Game from "../screens/GameScreeen/GameScreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '/game',
        element: <Game />
    },
])

export default router;