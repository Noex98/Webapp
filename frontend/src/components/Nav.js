import Link from '../utils/Link.js'

export default function Nav(){
    return ( /*html*/ `
        <nav>
            <ul>
                <li>
                    ${Link('/', 'Home')}
                </li>
                <li>
                    ${Link('/stats', 'Stats')}
                </li>
                <li>
                    ${Link('/settings', 'Settings')}
                </li>
            </ul>
        </nav>
    `)
}