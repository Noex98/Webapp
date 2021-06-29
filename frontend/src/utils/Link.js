export default function Link(path, content){

    return (
        `<a onclick="event.preventDefault(); location.hash = '${path}'">
            ${content}
        </a>`
    )
}