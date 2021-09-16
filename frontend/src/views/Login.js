import Header from "../components/Header.js"
import Redirect from "../utils/Redirect.js"
import { __PROD_ENV as __ENV } from "../env.js"

export default function Login(){

    window.login = () => {
        fetch(__ENV + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }),
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data.login === false){
                    document.getElementById('errLog').innerText = data.err
                } else {
                    Redirect('/')
                }
            })
    }

    return (/*html*/ `
        ${Header()}
            <h1>Login</h1>
            <div>
                <label for="username">Username / E-mail: </label>
                <input type="text" name="username" id="username" />
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" />
                <button onclick="login()">Login</button>
                <div id="errLog"></div>
            </div>
    `)
}