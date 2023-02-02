import { useState } from 'react'
import {TwitterPicker} from 'react-color'
import DrawingPanel from './DrawingPanel'
import './Editor.css'

export default function Editor({rows, columns}) {
    const [color, setColor] = useState("#000000")

    function handleColor(color) {
        setColor(color.hex)
    }

    return (
        <div className='editor'>
            <TwitterPicker onChangeComplete={handleColor} color={color} />
            <DrawingPanel rows={rows} columns={columns} color={color} /> 
        </div>
    )
}