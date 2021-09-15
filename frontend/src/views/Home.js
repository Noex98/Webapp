import Header from '../components/Header.js'
import { user } from '../Store.js'

export default function Home(){

    let user = user.data()

    return (/*html*/ `
            ${Header()}
            <h1>Home component</h1>
    `)
}