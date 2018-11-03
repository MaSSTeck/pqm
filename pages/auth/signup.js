import React from 'react'
import withData from '../../src/config/apollo';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Image, Icon, Message, Segment } from 'semantic-ui-react'
// import HeaderPQM from '../../src/layout/HeaderPQM';
// import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-css/semantic.min.css';


//const Login = () => (
    export default withData(props => (

  <div className='login-form'>
      
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <a href="/"><Icon name='settings' /> Create account</a>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Sign up
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/auth/login'>Log In</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
))
