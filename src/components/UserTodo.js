import React, { useReducer, useState } from 'react'

const ACTION_TYPE = {
    ADD_TODO: "addTodo",
    COMPLETE_TODO: "completeTodo",
    DELETE_TODO: "deleteTodo"
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_TYPE.ADD_TODO:
            return [...state, { id: Date.now(), name: payload, isComplete: false }];
        case ACTION_TYPE.COMPLETE_TODO:
            return state.map(item => {
                if (item.id === payload) {
                    return { ...item, isComplete: true }
                }
                return item
            })
        case ACTION_TYPE.DELETE_TODO:
            return state.filter(item => item.id !== payload)
        default:
            return state;
    }
}

const UserTodo = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo })
        setTodo('')
    }

    return (
        <div className='container mt-2'>
            <form onSubmit={e => handleSubmit(e)}>
                <input value={todo} onChange={e => { setTodo(e.target.value) }} className='form-control mb-3' type="text" />
            </form>

            {todos.map(item => {
                return (
                    <div key={item.id} className={`d-flex justify-content-between align-items-center alert ${item.isComplete ? `alert-success` : `alert-secondary`}`}>
                        {item.name}
                        <div className='d-flex'>
                            <button onClick={e => { dispatch({ type: ACTION_TYPE.COMPLETE_TODO, payload: item.id }) }} className='btn btn-primary mx-2'>✅</button>
                            <button onClick={e => { dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: item.id }) }} className='btn btn-danger'>🗑️</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserTodo
