import React from 'react';
import { useFilterByRankBlackAndGuardQuery } from './generated/graphql';

interface Props {

}

export const MyGuard: React.FC<Props> = () => {
    const{data} = useFilterByRankBlackAndGuardQuery();

  const random1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
  


  if (!data) {
    return null
  }

    return (
      <>
      <div>
        <h1>My Guard</h1>
        <li>{random1?.title}</li>
        <li>{random1?.description}</li>
        <li>{random1?.videoLink}</li>
        <li>{random1?.rank}</li>
        <li>{random1?.category}</li>
      </div>
    </>
    );
}
