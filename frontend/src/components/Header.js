import Link from "../utils/Link.js"

export default function Header(){
    return (/*html*/`
        <header>
            ${Link('/', /*html*/ `
                <h1>LIFTR</h1>
            `)}
        </header>
    `)
}