import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useFilterByRankBlackAndGuardQuery, useFilterByRankBlackAndPassingQuery, useFilterByRankBlackAndTakedownQuery } from './generated/graphql';
import { Guard1 } from './Guard1';
import { Guard2 } from './Guard2';
import { Guard3 } from './Guard3';
import { MyLogs } from './MyLogs';
import { Nav } from './Nav';
import { Pass1 } from './Pass1';
import { Pass2 } from './Pass2';
import { Pass3 } from './Pass3';
import { TakeDown1 } from './TakeDown1';
import { Guard1Context, Guard2Context, Guard3Context, Pass2Context, Pass3Context, PassingContext, Takedown1Context } from './TechniqueContext';
import { Workouts } from './Workouts';


interface Props {

}

export const MyHome: React.FC<Props> = () => {

    // PASSING
    const {data} = useFilterByRankBlackAndPassingQuery();
    const response1 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
    const response2 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]
    const response3 = data?.filterByRank[Math.round(Math.random() * data.filterByRank.length)]

    // GUARD
    const filterByRankBlackAndGuard = useFilterByRankBlackAndGuardQuery();
    const gaurdresponse1 = filterByRankBlackAndGuard.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndGuard.data?.filterByRank.length)]
    const guardresponse2 = filterByRankBlackAndGuard.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndGuard.data?.filterByRank.length)]
    const gaurdresponse3 = filterByRankBlackAndGuard.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndGuard.data?.filterByRank.length)]
    // console.log(filterByRankBlackAndGuard.data?.filterByRank)

    //TAKEDOWN

    const filterByRankBlackAndTakedown = useFilterByRankBlackAndTakedownQuery();
    const takedownresponse1 = filterByRankBlackAndTakedown.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndTakedown.data?.filterByRank.length)]
    const takedownresponse2 = filterByRankBlackAndTakedown.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndTakedown.data?.filterByRank.length)]
    const takedownresponse3 = filterByRankBlackAndTakedown.data?.filterByRank[Math.round(Math.random() * filterByRankBlackAndTakedown.data?.filterByRank.length)]



    
    return (
        <>
        <PassingContext.Provider value={response1}>
            <Pass2Context.Provider value={response2}>
                <Pass3Context.Provider value={response3}>
                    <Guard1Context.Provider value={gaurdresponse1}>
                         <Guard2Context.Provider value={guardresponse2}>
                             <Guard3Context.Provider value={gaurdresponse3}>
                                 <Takedown1Context.Provider value={takedownresponse1}>
                                 <BrowserRouter>
                                 <Nav />
                                 <Switch>
                                     <Route exact path='/' component={Workouts}/>
                                     <Route exact path='/mylogs' component={MyLogs}/>
                                     {/* <Route exact path='/techlist' component={TechList}/> */}
                                     <Route exact path='/pass1' component={Pass1} />
                                     <Route exact path='/pass2' component={Pass2} />
                                     <Route exact path='/pass3' component={Pass3}/>
                                     <Route exact path='/guard1' component={Guard1} />
                                     <Route exact path='/guard2' component={Guard2}/>
                                     <Route exact path='/guard3' component={Guard3}/>
                                     <Route exact path='/takedown1' component={TakeDown1}/>

                                </Switch>
                                </BrowserRouter>
                                     
                                 </Takedown1Context.Provider>
                             </Guard3Context.Provider>
                        </Guard2Context.Provider>    
                    </Guard1Context.Provider>
                </Pass3Context.Provider>
            </Pass2Context.Provider>
        </PassingContext.Provider>

      
           
        </>

        );
}