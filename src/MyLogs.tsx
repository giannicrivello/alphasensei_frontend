import React, { useEffect, useState } from 'react';
import { useGetLogsQuery, useMeQuery } from './generated/graphql';

interface Props {

}

export const MyLogs: React.FC<Props> = () => {
    const {data} = useGetLogsQuery();
    const me = useMeQuery();
    // const response = data?.getLogs[1]
    console.log(data)
    console.log(me.data?.me?.email)

    // const [log, setLog] = useState<any>('');

    // useEffect(()=> {
    //     setLog(response)

        
    // })

    if(!data) {
        return null
    }



        return (
            <>
            <div>{data.getLogs[1].title}</div>
            <ul>
                {data.getLogs.map(x => {
                    if (x.user_id == me.data?.me?.email) {
                        return (
                            <ul>
                                <li>{x.title}</li>
                                <li>{x.category}</li>
                                <li>{x.rank}</li>
    
    
                            </ul>
                        )
                        

                    }
         
                })}

            </ul>
            </>
        );
}