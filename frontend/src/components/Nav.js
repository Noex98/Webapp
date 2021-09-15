import Link from '../utils/Link.js'

export default function Nav(){
    return ( /*html*/ `
        <nav>
            <ul>
                <li>
                    ${Link('/plans', /*html*/ 'Plans icon')}
                </li>
                <li id="nav-li-center">
                    ${Link('/startWorkout', /*html*/ 'Start icon')}
                </li>
                <li>
                    ${Link('/stats', /*html*/ 'Stats icon')}
                </li>
            </ul>
        </nav>
    `)
}