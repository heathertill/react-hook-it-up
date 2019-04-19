import React, { useState, useEffect } from 'react';


const Details = (props) => {

    const [user, setUser] = useState({});

    const getUser = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let user = await res.json();
        setUser(user);
    }

    const [userAdd, setUserAdd] = useState([]);

    const getUserAdd = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let userAdd = await res.json();
        setUserAdd(userAdd.address)
    }

    const [userGeo, setUserGeo] = useState([]);

    const getUserGeo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let userGeo = await res.json();
        setUserGeo(userGeo.address.geo)
    }

    const [userComp, setUserComp] = useState([]);

    const getUserComp = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let userComp = await res.json();
        setUserComp(userComp.company)
    }

    useEffect(() => {
        getUser();
        getUserAdd();
        getUserGeo();
        getUserComp();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <div className="card w-75 shadow-lg">
                        <div className="card-body">
                            <h3 className="card-title" >{user.name}</h3>
                            <ul className="list-group list-group-flush m-3">
                                <li className="list-group-item" >{userAdd.street}, {userAdd.suite}<br />
                                    {userAdd.city}, {userAdd.zipcode}<br />
                                    Latitude/Longitude: {userGeo.lat}, {userGeo.lng}<br /><br />
                                    Email: {user.email}<br />
                                    Website: {user.website}
                                </li>
                                <li className="list-group-item" >Phone: {user.phone}</li>
                                <li className="list-group-item" >Username: {user.username}</li>
                                <li className="list-group-item  " ><h3>{userComp.name}</h3>
                                    Motto: {userComp.catchPhrase}<br />
                                    . . . . . . {userComp.bs}
                                </li>
                                
                                <li className="list-group-item d-flex justify-content-end border-top-0 m-2">
                                    <button onClick={() => props.history.goBack()} className="btn btn-primary">Go Back</button>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;