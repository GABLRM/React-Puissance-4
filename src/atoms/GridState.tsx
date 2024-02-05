import { atom } from "recoil";

export const gridState = atom({
    key: 'gridState', // unique ID (with respect to other atoms/selectors)
    default: [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""]
    ], // valeur par défaut (alias valeur initials)
});