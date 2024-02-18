import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RoomScreen from "../screens/RoomScreen/RoomScreen";
import GameScreen from "../screens/GameScreen/GameScreen";
import JoinRoomScreen from "../screens/JoinRoomScreen.tsx/JoinRoomScreen";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />
    },
    {
        path: '/game',
        element: <GameScreen />
    },
    {
        path: '/room/:id',
        element: <RoomScreen />
    },
    {
        path: 'joinroom',
        element: <JoinRoomScreen /> 
    }
])

export default router;