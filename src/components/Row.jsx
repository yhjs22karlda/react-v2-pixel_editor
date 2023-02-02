import Pixel from './Pixel'

export default function Row({columns,color}) {
    const rowPixels = columns.map((pixel, i) => <Pixel color={color} key={i}/>)

    return (
        rowPixels
    )
}