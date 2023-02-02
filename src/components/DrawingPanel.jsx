import Row from './Row'
import { useState } from 'react'
import './DrawingPanel.css'

export default function DrawingPanel({rows, columns, color}) {
    // tänkte spara färgerna i 'panel' men det behövdes inte
    const panel = Array(rows).fill(Array(columns).fill(null))

    const panelRows = panel.map((row, i) => {
        return (
            <div className='panel-row' key={i}>
                <Row columns={row} color={color}/>
            </div>
        )
    })

    return (
        <div className='panel'>
            {panelRows}
        </div>
    )
}