import { useBlackTechQuery, useBrownTechQuery, useMeQuery } from './generated/graphql';


export function BrownTech() {
    //her is the me query that alllows us to pull in the user that is logging i=n
    //extra login in log in page
    // const {data, loading} =useMeQuery();
    const {data} = useBrownTechQuery()

    if(!data) {
        return null
    }


    return (
        <>
            {data.filterByRank.map(x => {
                return (
                    <div>
                        <ul>
                            <li>{x.title}</li>
                            <li>{x.description}</li>
                            <li>{x.videoLink}</li>
                            <li>{x.rank}</li>
                            <li>{x.category}</li>




                        </ul>
                    </div>
                )
            })}

        </>

    );
}
