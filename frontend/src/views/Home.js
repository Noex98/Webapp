import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
import { user } from '../Store.js'

export default function Home(){

    let userData = user.data()
    userData == undefined ? console.log(1) : console.log(2)

    return (/*html*/ `
            ${Header()}
            <h1>Home component</h1>
            ${Nav()}
    `)
}