import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { setAcessToken } from './accessToken';
import { useBlackTechQuery, useMeQuery } from './generated/graphql';


export function MyTechnique() {
    //her is the me query that alllows us to pull in the user that is logging i=n
    //extra login in log in page
    // const {data, loading} =useMeQuery();
    
    const {data, loading} = useBlackTechQuery()
    const response = data?.filterByRank[0]
    // const response = data?[Object.keys(data)[0]] //this needs to be a randowm request

    if(response?.category == "passing") {
        return (
            <>
            <li>{response.title}</li>
            <li>{response.description}</li>
            <li>{response.videoLink}</li>
            <li>{response.rank}</li>
            <li>{response.category}</li>




            </>
        )
    } else {
        return null
    }

    // {data?.filterByRank.map(x => {
    //     return (
    //         <div>
    //             <ul>
    //                 <li>{x.title}</li>
    //                 <li>{x.description}</li>

    //             </ul>
    //         </div>
    //     )
    // })}


        
    
    // {data.filterByRank.map(x => {
    //     if(x.category == "passing") {
    //         return (
    //         <div>
    //             <ul>
    //                 <li>{x.title}</li>
    //                 <li>{x.description}</li>
    //                 <li>{x.videoLink}</li>
    //                 <li>{x.rank}</li>
    //                 <li>{x.category}</li>
    //             </ul>
    //         </div>
    

    // return (
    //     <>
    //         {response.map(x => {
    //             return (
    //                 <div>
    //                     <ul>
    //                         <li>{x.title}</li>
    //                         <li>{x.description}</li>
    //                         <li>{x.videoLink}</li>
    //                         <li>{x.rank}</li>
    //                         <li>{x.category}</li>





    //                     </ul>
    //                 </div>
    //             )
    //          })} 
            

    //     </>

    // );
}


// import React from 'react';
// import { useGetAllTechQuery, useMeQuery } from './generated/graphql';
// import { Header } from './Header';category


// interface Props {

// }

// export const MyHome: React.FC<Props> = () => {

//     const {data} = useGetAllTechQuery(); 
//     console.log(data)

//     if(!data) {
//         return null
//     }




//         return (
//             <>
//             <Header />
//                 {data.techniques.map(x => {
//                     return (
//                         <div>
//                             <ul>
//                                 <li>Title : {x.title}</li>
//                                 <li> Description: {x.description}</li>
//                                 <img src={x.videoLink} />
//                                 <li>Category: {x.category}</li>
//                                 <li>Rank: {x.rank}</li>

//                             </ul>
//                         </div>
//                     )
//                 })}


//             </>

//         );