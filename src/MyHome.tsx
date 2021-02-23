import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useGetAllTechQuery, useMeQuery } from './generated/graphql';
import { MyLogs } from './MyLogs';
import { Nav } from './Nav';
import { Workouts } from './Workouts';


interface Props {

}

export const MyHome: React.FC<Props> = () => {
    
    
    return (
        <>
        <BrowserRouter>
        <Nav />
        <Switch>
            <Route exact path='/' component={Workouts}/>
            <Route exact path='/mylogs' component={MyLogs}/>

            
        </Switch>
        </BrowserRouter>
           
        </>

        );
}