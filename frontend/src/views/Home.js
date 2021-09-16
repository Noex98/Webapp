import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
import ProtectRoute from '../utils/ProtectRoute.js'

export default function Home(){

    ProtectRoute()

    return (/*html*/ `
            ${Header()}
            <h1>Home component</h1>
            ${Nav()}
    `)
}