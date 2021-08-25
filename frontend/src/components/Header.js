import Link from '../utils/Link.js'
import Nav from '../components/Nav.js'

export default function Header(){
    return (/*html*/
        `<header>
            ${Link('/', /*html*/ `
                <img class="logo"/ src="./media/images/logo.png" alt="logo">
            `)}
            
            ${Nav()}
        </header>`
    )
}