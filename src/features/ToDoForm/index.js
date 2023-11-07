import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input/Input"
import './style.css'



const ToDoForm = ({listItems, setItems}) => {

   const [toDo, seToDo] = useState('')
    
    const addToDo = () => {
        const found = listItems.find((item) => toDo === item.title)
        if(found) return alert('To do should be unique')
        setItems({title: toDo, checked: false})
        seToDo('')
    }

    return (
        <div className="container">
            <Input value={toDo} setValue={seToDo}/>
            <Button name='Add to do' onClick={addToDo}/>
        </div>
    )
}

export default ToDoForm