import './Pixel.css'

export default function Pixel({color}) {
    console.log(color);

    return (
        <div
            className="pixel"
            style={{backgroundColor:color}}
        >

        </div>
    )
}