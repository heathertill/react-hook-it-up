import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        
                <div>
                    <div className="col-md-12">
                            {users.map(user => (
                                <div className="d-flex flex-row border m-2 p-2 justify-content-between"  >
                                    
                                        <h3 className="m-0"  key={user.id}>{user.name}</h3>
                                        <Link
                                            to={`/${user.id}/details`}
                                            className="btn btn-primary"
                                        >
                                            View Bio
                                    </Link>
                                    </div>
                                
                            ))}
                    </div>
                </div>
            
       
    )
}








export default Home;









