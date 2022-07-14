import { useEffect, useState } from "react";
import List from "../List/List";
import "./Todo.css"


function Todo() {

    const initial_State = [{
        id: 1, görev: "react öğren", completed: true
    },
    { id: 2, görev: "işe git", completed: false }
    ]

    const [list, setList] = useState(initial_State)
    const [userInput, setUserInput] = useState("")


    const onChangeInput = (e) => {
        setUserInput(e.currentTarget.value)

    }

    const buttonClick = (e) => {
        e.preventDefault();
        setList([...list, { id: Math.random(), görev: userInput, completed: false }])
    }


    const [filtered, setFiltered] = useState([...list])

    const [visible, setVisible] = useState("hidden")



    function filteredAll() {
        setFiltered(list)
        setVisible("hidden")
    }

    function filteredFalse() {
        setFiltered(list.filter((el) => el.completed === false))
        setVisible("hidden")
    }

    function filteredTrue() {
        setFiltered(list.filter((el) => el.completed === true))

        { filtered.length > 0 && setVisible("") }

        console.log(visible)
    }

    function completedClear() {
        setList(list.filter((el) => el.completed === false))
        setVisible("hidden")
    }

    useEffect(() => setFiltered(list)
        , [list])

    return (
        <>
            <div className="container">
                <div>
                    <div>
                        <h1 className="header"> TODOS </h1>

                    </div>
                    <div className="inputyap">
                        <input
                            className="inputarea"
                            placeholder="What needs to be done?"
                            onChange={onChangeInput}
                            name="görev"
                        ></input>

                        <button className="ekle" onClick={buttonClick} > EKLE </button>
                    </div>

                    <div className="main">
                        <List liste={list} filtered={filtered} setList={setList} />
                    </div>
                </div>
                <div className="footer">
                    <button onClick={filteredAll}> All</button>
                    <button onClick={filteredFalse} > Active</button>
                    <button onClick={filteredTrue}>Completed</button>
                    <button className={visible} onClick={completedClear} > Clear Completed</button>

                </div>

            </div>
        </>

    )
}

export default Todo;