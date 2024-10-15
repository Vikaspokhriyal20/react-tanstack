import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { fetchGithubUser } from '../API/api';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Infinite = () => {
  const { data, hasNextPage, fetchNextPage, status , isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchGithubUser,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 12 ? allPages.length + 1 : undefined;
    },
  });
 
  const {ref,inView} = useInView({
    threshold: 1,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error fetching data</div>

  return (
    <section className='container infinite'>
      {data?.pages?.map((user, index) => {
        return (
          <ul key={index} className='user-container'>
            {user.map((profile) => {
              return (
                <li key={profile.id} className='usercard'>
                  <img src={profile.avatar_url} alt={profile.login} className='profile-img' />
                  <p className='username'>{profile.login}</p>
                  <p>{profile.type}</p>
                  <NavLink to={profile.html_url} target='_blank' className='profile-url'>See Profile</NavLink>
                </li>

              )
            })}
          </ul>
        )
      })}
      <div ref={ref} className='loading-more'>{isFetchingNextPage ? 'Loading more...' : null}</div>
    </section>
  );
};

export default Infinite
