import React from 'react'

const Form = ({ setItemtext, itemText, onSubmit }) => {

    return (
        <div className='todo-add'>
            <h1 className='title'>ToDo List</h1>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <input type='text' placeholder='Add ToDo Item' onChange={e => { setItemtext(e.target.value) }} value={itemText}></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form