import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { BrowserRouter, Link, RouteChildrenProps, RouteComponentProps } from 'react-router-dom'; //this allows us to use history for the redirect to home
import { setAcessToken } from './accessToken';
import { MeDocument, MeQuery, useLoginMutation } from './generated/graphql';

export const Login: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useLoginMutation();

    function refresh() {
        // history.push('/register')
        window.location.reload();
    }
    


    return (
        <Form onSubmit={async e => {
            console.log('logged in');
            const response = await login({
                variables: {
                    email,
                    password
                },

                update: (store, {data}) => {
                    if(!data) {
                        return null;
                    }
                    store.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                            me: data.login.user
                        }
                    })
                }
            });
            console.log(response)
            if (response && response.data) {
                setAcessToken(response.data.login.accessToken);
            }
            history.push('/')
            window.location.reload()
        }}>
          <Form.Field>
            <label>Email</label>
            <input value={email} placeholder='email' onChange={e => {
                setEmail(e.target.value);
            }} />
          </Form.Field>
          <Form.Field>
            <label>Passoword</label>
            <input value={password} placeholder='password' onChange={e => {
                setPassword(e.target.value);
            }} />
          </Form.Field>
        
          <Button type='submit'>Login</Button>
          <BrowserRouter>
          <Link to='/register'>
            <Button onClick={refresh}>New here? Sign up!</Button>
          </Link>
          </BrowserRouter>
        </Form>
      )

}

