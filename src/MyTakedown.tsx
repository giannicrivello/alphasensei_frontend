import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useFilterByRankBlackAndTakedownQuery } from './generated/graphql';
interface Props {

}

export const MyTakedown: React.FC<Props> = () => {
    const{data} = useFilterByRankBlackAndTakedownQuery();

     const random1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
  


  if (!data) {
    return null
  }

    return (
      <>
      <div>
        <h1>My Takedowns</h1>
        <li>{random1?.title}</li>
        <li>{random1?.description}</li>
        <img src={random1?.videoLink} />
        <li>{random1?.rank}</li>
        <li>{random1?.category}</li>
        <Button> Log Drill </Button>
      </div>
    </>
    );
}
