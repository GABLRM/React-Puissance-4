import React from "react";
import './HomeScreen.css';
import LinkButton from "../../components/LinkButton/LinkButton";

const HomeScreen = () => {
    return (
        <div className="mainContainer">
            <h1>Puissance 4 Online</h1>
            <input type="text" placeholder="Username 1" className="textInput" />
            <input type="text" placeholder="Username 2" className="textInput" />
            <LinkButton to="/game" label="Play !" />
        </div>
    );
};

export default HomeScreen;
