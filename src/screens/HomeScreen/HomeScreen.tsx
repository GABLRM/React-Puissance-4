import React from "react";
import './HomeScreen.css';
import LinkButton from "../../components/LinkButton/LinkButton";

const HomeScreen = () => {
    return (
        <div className="mainContainer">
            <h1 className="title">Puissance 4 Online</h1>
            <div className="rowContainer">
                <div className="inputWithIcon">
                    <div className="token red" />
                    <input type="text" placeholder="Username 1" className="textInput" />
                </div>
                <div className="inputWithIcon">
                    <div className="token yellow" />
                    <input type="text" placeholder="Username 2" className="textInput" />
                </div>
            </div>
            <div className="buttonContainer">
                <LinkButton to="/game" label="Play !" />
            </div>
        </div>
    );
};

export default HomeScreen;
