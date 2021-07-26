import Link from '../utils/Link.js'

export default function Nav(){
    return (
        `<nav>
            <ul>
                <li>
                    ${Link('/', 'Home')}
                </li>
                <li>
                    ${Link('/about', 'About')}
                </li>
                <li>
                    ${Link('/gallery', 'Gallery')}
                </li>
            </ul>
        </nav>`
    )
}