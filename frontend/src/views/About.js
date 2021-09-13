import Header from '../components/Header.js'
import Redirect from '../utils/Redirect.js'

export default function About(){
    return (/*html*/ `
            ${Header()}
            <h1>About component</h1>
            ${Redirect('/')}
    `)
}