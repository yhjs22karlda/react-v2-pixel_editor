import { useState } from 'react'
import {TwitterPicker} from 'react-color'
import DrawingPanel from './DrawingPanel'

export default function Editor() {
    const [color, setColor] = useState("")

    function handleColor(color) {
        console.log(color.hex);
        setColor(color.hex)
    }

    return (
        <div>
            <TwitterPicker onChangeComplete={handleColor}/>
            <DrawingPanel color={color}/> 
        </div>
    )
}