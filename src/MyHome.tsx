import React from 'react';
import { useGetAllTechQuery, useMeQuery } from './generated/graphql';
import { Header } from './Header';


interface Props {

}

export const MyHome: React.FC<Props> = () => {

    const {data} = useGetAllTechQuery(); 
    const response = data?.techniques[1]

    if(!data) {
        return null
    }




        return (
            <>
            <Header />
                {/* {response?.map(x => {
                    return (
                        <div>
                            <ul>
                                <li>Title : {x.title}</li>
                                <li> Description: {x.description}</li>
                                <img src={x.videoLink} />
                                <li>Category: {x.category}</li>
                                <li>Rank: {x.rank}</li>

                            </ul>
                        </div>
                    )
                })} */}
                {/* <li>{response?.title}</li>
                <li>{response?.description}</li> */}



            </>

        );
}