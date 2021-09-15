export default function NewUser(){
    return (/*html*/ `
            <h1>Sign up</h1>
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />
                <label for="email">E-mail: </label>
                <input type="text" name="email" id="email" />
                <label for="password">Password: </label>
                <input type="text" name="password" id="password" />
            </div>
    `)
}