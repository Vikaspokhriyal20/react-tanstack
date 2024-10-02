import React, { useEffect, useState } from 'react'
import { fetchUser } from '../API/api';

const Fetchhold = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
            const res = await fetchUser();
            console.log(res);
                res.status === 200 ? setData(res.data) : []
                setLoading(false);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
            return [];
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    if (loading) {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className='loading'>
                <p>{error.message} ☹</p>
            </div>
        )
    }


    return (
        <main>
            <div className='container'>
                <div className="grid-col-3">
                    {data?.map((currUser) => {
                        return (
                            <div className="usercard" key={currUser.id}>
                                <p>{currUser.name}</p>
                                <kbd>{currUser.email}</kbd>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Fetchhold
