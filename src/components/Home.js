import React from 'react'
import List from './List'
import { useSelector } from 'react-redux';

function Home(props) {
    const usersList = useSelector((state) => {
        return state.user.items;
    })
    // console.log(usersList)
    return (
        <div className='container'>
            <div className='row'>
                <h3 className='mt-3 mb-5 text-center'>
                    {props.title}
                </h3>
                <br />
                <div className='col-md-1'></div>
                <div className='col-md-11'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersList.map((userData) => (
                                <List user={userData} key={userData.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;