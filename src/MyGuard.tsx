import React from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useFilterByRankBlackAndGuardQuery } from './generated/graphql';

interface Props {

}

export const MyGuard: React.FC<Props> = () => {
    const{data} = useFilterByRankBlackAndGuardQuery();
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
