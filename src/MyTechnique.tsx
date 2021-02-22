import {useFilterByRankBlackAndPassingQuery} from './generated/graphql'

import React from 'react';

interface Props {

}

export const MyPassing: React.FC<Props> = () => {

  const {data} = useFilterByRankBlackAndPassingQuery();
  const random1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
  


  if (!data) {
    return null
  }

    return (
      <>
      <form>
        <h1>My Passes</h1>
        <li>{random1?.title}</li>
        <li>{random1?.description}</li>
        <img src={random1?.videoLink} />
        <li>{random1?.rank}</li>
        <li>{random1?.category}</li>
      </form>
    </>
    );
}

// {data.filterByRank.map(x => {
//   return(
//     <>
//     <ul>
//       <li>
//         {x.title}
//       </li>
//       <li>
//         {x.description}
//       </li>
//       <li>
//         {x.videoLink}
//       </li>
//       <li>
//         {x.category}
//       </li>
//       <li>
//         {x.rank}
//       </li>

//     </ul>
//     </>
//   )
// })}