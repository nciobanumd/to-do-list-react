import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input/Input"
import './style.css'



const ToDoForm = ({handleChange, value}) => {

   const [toDo, setToDo] = useState(value)
    
    const addToDo = () => {
        handleChange(toDo)
        setToDo('')
    }

    useEffect(() => {
        setToDo(value)

    }, [value])

    return (
        <div className="formContainer">
            <Input value={toDo} setValue={setToDo}/>
            <Button name='Add to do' onClick={addToDo}/>
        </div>
    )
}

export default ToDoForm