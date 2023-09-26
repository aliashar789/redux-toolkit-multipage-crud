import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userInfo, updateUser, setInputField } from '../redux/userSlice';

const EditUser = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myUsers = useSelector((state) => state.user);
    const inputField = useSelector((state) => state.user.inputField);
    const { id } = useParams();

    useEffect(() => {
        dispatch(userInfo(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (myUsers.user) {
            dispatch(setInputField(myUsers.user));
        }
    }, [myUsers.user]);

    const inputHandler = (e) => {
        dispatch(
            setInputField({
                ...inputField,
                [e.target.name]: e.target.value,
            })
        );
    };

    const submitButton = async () => {
        const updatedUser = await dispatch(updateUser(inputField));
        // console.log("🚀 ~ updatedUser:", updatedUser)
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
                    <form autoComplete='off' action='/login-user' method='post'>
                        <div className='mb-3'>
                            <label className='form-label'>User Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                value={inputField.name || ''}
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
                                Edit User
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

export default EditUser
