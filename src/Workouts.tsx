import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import { setAcessToken } from './accessToken';
import { useMeQuery } from './generated/graphql';
import { MyGuard } from './MyGuard';
import { MyPassing } from './MyPassing';
import { MyTakedown } from './MyTakedown';
import TechList from './TechList';
import RecipeReviewCar from './TestCard';

export const Workouts: React.FC = () => {
      //her is the me query that alllows us to pull in the user that is logging i=n
    //extra login in log in page
    const {data, loading} =useMeQuery();

    if (!loading && data && data.me && data.me.myRank == "black"){
        return (
            <div>
                <TechList />
                            
            </div>
        )
    } else if (!loading && data &&data.me && data.me.myRank == "brown" ){
        return (
            <div>
                this is where brwon tech goes
            </div>
        )   
    } else {
        console.log('it didnt work')
    }

    return (
        <>
            <div>{!loading && data && data.me ? (data.me.firstName) : null}</div>
            <div>{!loading && data && data.me ? (data.me.email) : null}</div>
            <div>{!loading && data && data.me ? (data.me.myRank) : null}</div>
            <div>{!loading && data && data.me ? (data.me.gender) : null}</div>
            

        </>
  
    )
  }


