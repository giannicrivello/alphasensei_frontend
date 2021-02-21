import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useRegisterMutation } from './generated/graphql';
import { BrowserRouter, Link, RouteChildrenProps, RouteComponentProps } from 'react-router-dom'; //this allows us to use history for the redirect to home


interface Props {

}

export const Register: React.FC<RouteComponentProps> = ({history}) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [myRank, setRank] = useState('');
  const [registerUser] = useRegisterMutation();

  function refresh(){
    history.push('/login')
  }




    return (
      <Form
      onSubmit={async e => {
        e.preventDefault()
        console.log('registration submitted');
        const response = await registerUser({
          variables: {
            firstName,
            lastName,
            email,
            password,
            age,
            gender,
            myRank
          }
        })
        history.push('/login')
      }} 
      >
        <Form.Field>
          <label>First Name</label>
          <input value={firstName} placeholder='First Name' onChange={e => {
            setfirstName(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <input value={lastName} placeholder='Last Name' onChange={e => {
            setlastName(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Email </label>
          <input value={email} placeholder='email' onChange={e => {
            setEmail(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Passowrd</label>
          <input value={password} placeholder='password' onChange={e => {
            setPassword(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Age</label>
          <input value={age} placeholder='age' onChange={e => {
            setAge(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Gender</label>
          <input value={gender} placeholder='gender' onChange={e => {
            setGender(e.target.value)
          }} />
        </Form.Field>

        <Form.Field>
          <label>Rank</label>
          <input value={myRank} placeholder='rank' onChange={e => {
            setRank(e.target.value)
          }} />
        </Form.Field>


        <Button type='submit'>Register</Button>  
        <BrowserRouter>
          <Link to='/login'>
            <Button onClick={refresh}>Already a Member? Login</Button>
          </Link>
        </BrowserRouter>      


        
      </Form>
          
    );
}