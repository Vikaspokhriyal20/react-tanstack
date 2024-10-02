import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPost } from '../API/api'

const Fetching = () => {

    const getPostData = async () => {
        try {
            const res = await fetchPost();
            return res.status === 200 ? res.data : []
            
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const { data, isPending , isError , error} = useQuery({
        queryKey: ['posts'], 
        queryFn: getPostData,
    });



    if (isPending) {
        return (
            <div className="loading">
                <p> Loading...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="loading">
                <p>Erorr : {error.message || "something went wrong!"}</p>
            </div>
        )
    }



return (
    <section>
        <div className='container'>
            <div className="grid-col-3">
                {data?.map((currPost) => {
                    const { id, title, body } = currPost
                    return (
                        <div className="usercard" key={id}>
                            <p className='title'>{title}</p>
                            <p>{body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

)
}

export default Fetching
