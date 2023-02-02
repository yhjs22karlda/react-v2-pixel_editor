import './Pixel.css'
// TODO Rita linje vid mouseDown
export default function Pixel({color}) {
    let bgColor = "";

    function handleMouseEnter(e) {
        bgColor = e.target.style.backgroundColor
        e.target.style.backgroundColor = color
    }

    function handleMouseLeave(e) {
        e.target.style.backgroundColor = bgColor
    }

    function handleClick(e) {
        bgColor = color
        e.target.style.backgroundColor = bgColor
    }

    return (
        <div
            className="pixel"
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseLeave(e)}
            onClick={e => handleClick(e)}
        >
        </div>
    )
}