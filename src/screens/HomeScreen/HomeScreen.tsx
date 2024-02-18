import { useState } from "react";
import './HomeScreen.css';
import LinkButton from "../../components/LinkButton/LinkButton";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/UserState";

const HomeScreen = () => {

    const [user, setUser] = useRecoilState(userState);
    const [username, setUsername] = useState<string>("");

    enum Token {
        Y = "yellow",
        R = "red"
    }
    const [token, setToken] = useState<Token>(Token.Y);

    const switchToken = () => {
        if (token === Token.Y) {
            setToken(Token.R);
        } else {
            setToken(Token.Y);
        }
    }


    const setUserState = () => {
        setUser({
            ...user,
            username,
            color: token
        })
    }

    const createRoom = () => {
        const randomRoomId = Math.floor(Math.random() * 100000).toString();
        const roomUrl = '/room/' + randomRoomId;
        return roomUrl;
    }

    return (
        <div className="mainContainer">
            <h1 className="title">Puissance 4 Online</h1>
            <div className="rowContainer">
                <div className="inputWithIcon">
                    <button className={'token ' + token} onClick={switchToken}></button>
                    <input type="text" placeholder="Username" className="textInput" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>
            <div className="buttonContainer">
                <LinkButton to={createRoom()} onClick={setUserState} label="Create Room" />
                <LinkButton to="/joinRoom" label="Join Room" />
            </div>
        </div>
    );
};

export default HomeScreen;
