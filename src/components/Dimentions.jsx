import './Dimentions.css'

export default function Dimentions({setRows, setColumns, handleClick}) {

    return (
        <>
            <div className="dimentions">
                <h3>Ange dimentioner</h3>
                <input type="number" placeholder='rows (1-64)' width="10"
                    onChange={(e) => setRows(Number(e.target.value))}
                />
                <input type="number" placeholder='columns (1-64)'
                    onChange={(e) => setColumns(Number(e.target.value))}
                />
                <button onClick={handleClick}>Börja Rita</button>
            </div>
        </>
    )
}