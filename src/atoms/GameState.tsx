import { atom } from "recoil";

export const gameState = atom({
    key: 'gameState', // unique ID (with respect to other atoms/selectors)
    default: { 
            "yellow": {
                "playerName": "PlayerName 1",
                "color": "yellow",
                "isPlaying": true},
            "red": {
                "playerName": "PlayerName 2",
                "color": "red",
                "isPlaying": false},
            "isPlaying": "yellow"
    }, // valeur par défaut (alias valeur initials)
});