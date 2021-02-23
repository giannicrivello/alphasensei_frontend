import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { MyLogs } from './MyLogs';
import { Workouts } from './Workouts';

interface Props {

}

export const Nav: React.FC<Props> = () => {
        return (
            <>
                    <Link to="/mylogs">
                        <Button>My Logs</Button>
                    </Link>
                    <Link to="/">
                        <Button> My Workout</Button>
                    </Link>
            </>
        );
}