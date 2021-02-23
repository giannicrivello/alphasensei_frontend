<<<<<<< HEAD
import React, { useState } from 'react';
import { useFilterByRankBlackAndGuardQuery, useMeQuery, usePostToLogMutation } from './generated/graphql';
=======
import React from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useFilterByRankBlackAndGuardQuery } from './generated/graphql';
>>>>>>> 6e0f9ab6ba572258bc1d0c132505746058c3a024

interface Props {

}

export const MyGuard: React.FC<Props> = () => {
    const{data} = useFilterByRankBlackAndGuardQuery();
<<<<<<< HEAD
    const response1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
    const [postToUser] = usePostToLogMutation();
    const [tech, setTech] = useState<any>('');
    const [title, setTitle] = useState<any>('');
    const [category, setCategory] = useState<any>('');
    const [rank, setRank] = useState<any>('');
    const [user_id, setUser_id] = useState<any>('');

    const me = useMeQuery();
    console.log(me.data?.me?.email)
    console.log(tech)
  


    function log() {
      setTech(response1)
      setTitle(response1?.title)
      setCategory(response1?.category)
      setRank(response1?.rank)
      setUser_id(me.data?.me?.email)
      alert('if you log a new workout will be generated and this will be saved to your workout')
    }
    if (!data) {
      return null
    } else if (!response1?.title && 
      !response1?.videoLink && 
      !response1?.description && 
      !response1?.title && 
      !response1?.category &&
      !response1?.rank) {
        return null
      
    } else {
      return (
        <>
        <div>
          <h1>My Passes</h1>
          <form
          onSubmit={async e => {
            e.preventDefault()
            const response = await postToUser({
              variables: {
                title,
                category,
                rank,
                user_id
              }
            })
          }}
          >
          <input value={response1?.title} readOnly/>
          <li>{response1?.videoLink}</li>
          <input value={response1?.description} readOnly/>
          <input value={response1?.category} readOnly/>
          <input value={response1?.rank} readOnly/>
          <button type='submit' onClick={log}>log</button>
          </form>
        </div>
      </>
      );
      }
    }
=======
    const random1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
    const [state, setState] = useState('')

  


  if (!data) {
    return null
  }

    return (
      <>
      <div>
        <h1>My Guard</h1>
        <li>{random1?.title}</li>
        <li>{random1?.description}</li>
        <img src={random1?.videoLink} />
        <li>{random1?.rank}</li>
        <li>{random1?.category}</li>
      </div>
    </>
    );
}
>>>>>>> 6e0f9ab6ba572258bc1d0c132505746058c3a024
