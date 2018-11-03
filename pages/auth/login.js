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
      {/* <HeaderPQM titleText='Moderate'/> */}

    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
        <a href="/"><Icon name='settings' /> Log-in to your account</a>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Not new to us? <a href='/auth/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
))
