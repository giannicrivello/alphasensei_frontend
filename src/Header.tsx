import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { setAcessToken } from './accessToken';
import { BrownTech } from './BrownTech';
import { useMeQuery } from './generated/graphql';
import { MyTechnique } from './MyTechnique';


export const Header: React.FC = () => {
      //her is the me query that alllows us to pull in the user that is logging i=n
    //extra login in log in page
    const {data, loading} =useMeQuery();


    if (!loading && data && data.me && data.me.myRank == "black"){
        return (
            <div>
                <MyTechnique />
            </div>
        )
    } else if (!loading && data &&data.me && data.me.myRank == "brown" ){
        return (
            <BrownTech />
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


