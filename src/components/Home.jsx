import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    const [users, setUsers] = useState([]);  // useState needs to know the initial value of state ... blank array

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {   // has a callback that executes a function and an arg to tell it when to run
        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <ul className="list-group">
                        {users.map(user => (
                            <li className="list-group-item d-flex justify-content-between m-2 shadow-sm"
                                key={user.id}>{user.name}
                                <Link to={`/${user.id}/details`} className="btn btn-primary">View Info</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Home;