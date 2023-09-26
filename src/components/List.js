import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice'



function List(props) {
    const dispatch = useDispatch();
    console.log("user")
    const { name, email, phone, id } = props.user
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><Link to={{ pathname: `/edit-user/${id}`, userId: id }}><button className='btn btn-primary' type='button'>Edit</button></Link>

                <button onClick={() => dispatch(deleteUser(id))} className='btn btn-danger' type='button'>Delete</button>
            </td>
        </tr>
    )
}
export default List;