import React, { useReducer } from 'react'

const initialState = {
    username: "",
    email: "",
    phone: "",
    password: ""
}

const UserSignup = () => {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        initialState
    )
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    return (
        <div className='container m-2'>
            <h3>Sign Up</h3>
            <form onSubmit={e => {handleOnSubmit(e)}} >
                <div className='d-flex align-items-center mb-2' style={{"columnGap" : "10px"}}>
                    <label className='form-label m-0 w-25'>Username</label>
                    <input className='form-control' type="text" value={state.username} onChange={e => setState({username: e.target.value})} />
                </div>

                <div className='d-flex align-items-center mb-2' style={{"columnGap" : "10px"}}>
                    <label className='form-label m-0 w-25'>Email</label>
                    <input className='form-control' type="email" value={state.email} onChange={e => setState({email: e.target.value})} />
                </div>

                <div className='d-flex align-items-center mb-2' style={{"columnGap" : "10px"}}>
                    <label className='form-label m-0 w-25'>Phone</label>
                    <input className='form-control' type="text" value={state.phone} onChange={e => setState({phone: e.target.value})} />
                </div>

                <div className='d-flex align-items-center mb-2' style={{"columnGap" : "10px"}}>
                    <label className='form-label m-0 w-25'>Password</label>
                    <input className='form-control' type="password" value={state.password} onChange={e => setState({password: e.target.value})} />
                </div>

                <button className='btn btn-primary' >Submit</button>
            </form>
        </div>
    )
}

export default UserSignup
