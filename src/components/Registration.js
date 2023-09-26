import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { userRegister, setInputField, clearInputField } from '../redux/userSlice'

function Registration(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const inputField = useSelector((state) => state.user.inputField);
    console.log("🚀 ~ inputField:", inputField)

    const inputHandler = (e) => {
        dispatch(setInputField({
            ...inputField,
            [e.target.name]: e.target.value,
        })
        );
    };

    const submitButton = async () => {
        const newdata = dispatch(
            userRegister({
                ...inputField,
                id: shortid.generate(),
            })
        );
        // console.log("🚀 ~ newdata:", newdata)
        dispatch(clearInputField());
        navigate('/home');
    };

    return (
        <div className='container'>
            <div className='row'>
                <h3 className='mt-5 text-center'>
                    {props.title}
                </h3>
                <br />
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form action='/login-user' method='post'>
                        <div className='mb-3'>
                            <label className='form-label'>User Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                value={inputField.name || ""}
                                onChange={inputHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                value={inputField.email || ''}
                                onChange={inputHandler}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Phone</label>
                            <input
                                type='text'
                                className='form-control'
                                name='phone'
                                value={inputField.phone || ''}
                                onChange={inputHandler}
                            />
                        </div>
                        <div>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={submitButton}
                            >
                                Add User
                            </button>
                            &nbsp;
                            <Link to='/home'>
                                <button
                                    type='button'
                                    className='btn btn-success'
                                >
                                    Back
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
