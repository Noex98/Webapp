import Link from "../utils/Link.js"
import Redirect from '../utils/Redirect.js'


export default function Err404(){

    Redirect('/')


    return (/*html*/ `
        <h1>404 component</h1>
        ${Link('/', 'Back to home')}
    `)

}