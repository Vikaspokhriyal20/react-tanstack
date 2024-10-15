import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deletePost, fetchPost } from '../API/api'

const Fetching = () => {
    const [pageNumber, setPageNumber] = useState(0);


    const getPostData = async () => {
        try {
            const res = await fetchPost(pageNumber);
            return res.status === 200 ? res.data : []

        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['posts', pageNumber],
        queryFn: getPostData,
        placeholderData: keepPreviousData,
    });

    const mutation = useMutation({
        mutationFn: (id) => deletePost(id),
    });




    if (isPending) {
        return (
            <div className="loading">
                <p>Loading...</p>
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
                                {/* <p>{id}</p> */}
                                <p className='title'>{title}</p>
                                <p className='paratext'>{body}</p>
                                {/* <button className='deletepost' onClick={()=>mutation.mutate(id)}>Delete</button> */}
                            </div>
                        )
                    })}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => setPageNumber((prev) => prev - 6)}
                        disabled={pageNumber === 0 ? true : false}>
                        Prev
                    </button>
                    <p>{(pageNumber / 6 + 1)}</p>
                    <button onClick={() => setPageNumber((prev) => prev + 6)} >Next</button>
                </div>
            </div>

        </section>




    )
}

export default Fetching
