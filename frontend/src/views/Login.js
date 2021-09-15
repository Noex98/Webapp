import Header from "../components/Header.js"

export default function Login(){
    return (/*html*/ `
        ${Header()}
            <h1>Login</h1>
            <div>
                <label for="username">Username / E-mail: </label>
                <input type="text" name="username" id="username" />
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
    `)
}