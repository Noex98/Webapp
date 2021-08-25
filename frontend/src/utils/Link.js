export default function Link(path, content){
    
    return (/*html*/ `
        <a onclick="event.preventDefault(); location.hash = '${path}'">
            ${content}
        </a>
    `)
}