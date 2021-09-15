// Views
import Err404 from './views/Err404.js'
import Home from './views/Home.js'
import Login from './views/Login.js'
import NewUser from './views/NewUser.js'
import Settings from './views/Settings.js'
import Stats from './views/Stats.js'
import StartWorkout from './views/StartWorkout.js'
import Plans from './views/Plans.js'

const routes = [
    {
        path: '/',
        view: Home
    }, {
        path: '/login',
        view: Login
    }, {
        path: '/new-user',
        view: NewUser
    }, {
        path: '/settings',
        view: Settings
    }, {
        path: '/stats',
        view: Stats
    }, {
        path: '/startWorkout',
        view: StartWorkout
    }, {
        path: '/plans',
        view: Plans
    }
]

let root = document.getElementById('root')

// Render view in the DOM
function render(){
    let target = routes.find(element => element.path === window.location.pathname);
    root.innerHTML = target !== undefined ? target.view() : Err404()
}

// Global navigation function
window.navigateTo = path => {
    window.history.pushState(null, null, path)
    render()
}

// Navigating with history api
window.onpopstate = () => render()

// First render
window.onload = () => render()