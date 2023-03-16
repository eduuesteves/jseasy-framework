import { tag as s, responsive as r } from "./jseasy.js";

s("*", `
    box-sizing: border-box;
`)

/** ---- Body */
s("body", `
    margin: 0;
    padding: 0;
    font-family: "Poppins", cursive;
    background: #333;
    color: #fff;
    font-size: 20px
`)

/** --- Header */
s("header", `
    padding: 2rem 0 1rem;
    background: #7209b7;
    color: white;
    text-align: center;
`)

/** ---- H1 */
s("h1", `
    font-size: 36px;
`)

/** ---- Important */
s(".important", `
    margin-right: 1rem;
    font-weight: lighter;
    text-align: center;
    font-size: 18px;
`)

/** ---- Main */
s("main", `
    margin: 1rem auto;
    width: 900px;
`)

r(`
    @media screen and (max-width: 900px) {
        main {
            margin: 1rem;
            width: calc(100% - 2rem);
        }
    }
`)

/** ---- Button */
s("button", `
    padding: .5rem 1rem;
    font-weight: bold;
    border: none;
    transition: linear .3s background;
`)

s("button:hover", `
    background: #7209b7;
    color: #fff;
    box-shadow: 3px 3px 0 #fff;
    cursor: pointer;
`)

/** --- .button */
s(".button", `
    display: flex;
    align-items: center;
    gap: 7px;
`)

r(`
    @media screen and (max-width: 900px) {
        .button {
            flex-wrap: wrap;
            gap: 0;
        }
    }
`)

/** ---- A */    
s("a", `
    text-decoration: none;
`)

/** ---- Style */
s(".style", `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`)

/** ---- Card */
s(".card", `
    width: min(425px, 100%);
    background: #999;
    border-radius: 10px;
    padding: 10px;
    color: white
`)

/** ---- Details */
s(".details", `
    width: 100%;
`)

/** ---- Image */
s("img", `
    max-width: 100%;
    border-radius: 20px;
    margin: 1rem 0;
`)

/** --- .card-code */
s(".card-code", `
    background: #888;
    padding: .5rem;
    border-radius: 10px
`)

s(".code-color", `
    background: #777;
`)

r(`
    @media screen and (max-width: 660px) {
        .pre {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 470px) {
        .pre {
            font-size: 12px;
        }
    }
`)