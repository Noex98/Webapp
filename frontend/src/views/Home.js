import Header from '../components/Header.js'

export default function Home(){

    function func(){
        alert(1);
    }

    return (/*html*/ `
            ${Header()}
            <h1>Home component</h1>
    `)
}