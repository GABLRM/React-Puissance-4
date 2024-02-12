import React from "react";
import './HomeScreen.css';
import LinkButton from "../../components/LinkButton/LinkButton";
import { useRecoilState } from "recoil";
import { gameState } from "../../atoms/GameState";

const HomeScreen = () => {

    const [game, setGame] = useRecoilState(gameState);

    const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        const changed = e.target.id;
    
        if (changed == "red") {
            setGame({
                "yellow": {
                    ...game.yellow
                },
                "red": {
                    ...game.red,
                    "playerName": e.target.value
                },
                "isPlaying": game.isPlaying
            })
        } else if (changed == "yellow") {
            setGame({
                "yellow": {
                    ...game.yellow,
                    "playerName": e.target.value
                },
                "red": {
                    ...game.red
                },
                "isPlaying": game.isPlaying
            })
        }
        
    }
    
    return (
        <div className="mainContainer">
            <h1 className="title">Puissance 4 Online</h1>
            <div className="rowContainer">
                <div className="inputWithIcon">
                    <div className="token red" />
                    <input id="red" type="text" placeholder="Username 1" className="textInput" required onChange={updateUserName}/>
                </div>
                <div className="inputWithIcon">
                    <div className="token yellow" />
                    <input id="yellow" type="text" placeholder="Username 2" className="textInput" required onChange={updateUserName} />
                </div>
            </div>
            <div className="buttonContainer">
                <LinkButton to="/game" label="Play !" />
            </div>
        </div>
    );
};

export default HomeScreen;
