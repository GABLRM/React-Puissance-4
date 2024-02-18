import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/UserState";
const RoomScreen = () => {

    const { id } = useParams<{ id: string }>();
    const [username, setUsername] = useState<string>('');

    const [socket, setSocket] = useState<Socket>();
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        if (user.username !== "") {
            const socket = io('http://localhost:3000/room', { query: { username: user.username, slug: id } });
            console.log(socket);
            setSocket(socket);
        }
    }, [setSocket, user, id]);

    

    useEffect(() => {
        socket?.on('connect', () => {
            socket?.emitWithAck('joinRoom', id).then((response: any) => {
                if (response.hasOwnProperty('error')) {
                    console.log('error from joinRoom : ', response.error);
                }
            }).catch((err) => {
                console.error(err);
            });
        });

        socket?.on('joined', () => {
            console.log('someone joined');
        });

        // TODO : socket updateGrid
        
        //TODO : socket WIN



        return () => {
            socket?.disconnect();
        };
    }, [socket]);


    if (user.username === "") {
        return (
            <>
                <p>You need to enter your username in order to play.</p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username here" />
                <button type="button" onClick={() => setUser({...user, username})}>Play !</button>
            </>
        );
    }

    return (
        <>
            <div>Hello there</div>
            <p>you're in the room {id}</p>
        </>
    );
};

export default RoomScreen;