


const addToDoToBE = (list) => {
    return localStorage.setItem('myToDo', JSON.stringify(list))

}

export default addToDoToBE