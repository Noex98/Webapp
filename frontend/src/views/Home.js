import Header from '../components/Header.js'

export default function Home(){

    window.clickfunc = (n) => {
        alert(n)
    }

    return (/*html*/ `
            ${Header()}
            <h1>Home component</h1>
            <button onclick="clickfunc(3)">Click me</button>
    `)
}