import {useFilterByRankBlackAndPassingQuery, useMeQuery, usePostToLogMutation} from './generated/graphql'

import React, { useEffect, useState } from 'react';

interface Props {

}

export const MyPassing: React.FC<Props> = () => {
  const [postToUser] = usePostToLogMutation();
  const {data} = useFilterByRankBlackAndPassingQuery();
  const response1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
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
