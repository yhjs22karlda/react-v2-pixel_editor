import Editor from './components/Editor'
import Dimentions from './components/Dimentions'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [rows, setRows] = useState(0)
    const [columns, setColumns] = useState(0)
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        if(rows > 0 && rows < 64 && columns > 0 && columns < 64) {
            setClicked(true)
        }
    }

    return (
        <div className="app">
            <h2>Pixel Editor</h2>
            {!clicked && (<Dimentions
                setRows={setRows}
                setColumns={setColumns}
                handleClick={handleClick}
            />)}
            {clicked && <Editor rows={rows} columns={columns} />}
        </div>
    )
}
