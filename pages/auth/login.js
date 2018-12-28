import React from 'react'
import withData from '../../src/config/apollo';
import 'semantic-ui-css/semantic.min.css'
import Head from "next/head";
import Router from 'next/router'
import { Button, Form, Grid, Header, Icon, Message, Segment, Label, Dropdown } from 'semantic-ui-react'
import { LOGIN } from '../../src/graph/mutations/loginMutation';
import { Mutation } from 'react-apollo'

export default withData(props => {

  class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email:"", password: "", error:false, errorMessage:""};

    }

    saveUserToken = async data => {
      localStorage.setItem('auth-token', data.token)
      localStorage.setItem('auth-id', data.user.id)
      Router.push('/flagged')
    }
   
  
    render() {
      const { email, password, username ,gender} = this.state
      return (
        <div>
            {this.state.error?<Message>{this.state.errorMessage}</Message>:""} 

           <Form size='large'>
            <Segment stacked>
              
                  <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address'
                     onChange={e => this.setState({ email: e.target.value })}
                     type="text" value={this.state.email}  />

                  <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                     onChange={e => this.setState({ password: e.target.value })}
                    type="text" value={this.state.password} />

                  <Mutation
                      mutation={LOGIN}
                      variables={{ email, password }}
                      onCompleted={data => this.saveUserToken(data.login)}
                      onError={(error)=> {
                        this.setState({error:true}), 
                        this.setState({errorMessage: error.message})
                       }}  >

                      {mutation => (
                        <Button color='teal' fluid size='large' onClick={mutation}>
                            Sign up
                        </Button>
                  
                      )}
                   </Mutation>
              </Segment>
          </Form>
        </div>
      );
    }
  }

  return(
    
    <div className='login-form'>
        <Head>
          <title>FastQ | Log in </title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
      </Head>
      {/* <Clock/> */}
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
            <a href="/"><Icon name='settings' /> Log-in to account</a>
          </Header>
          <LoginForm/>
          <Message>
             Not new to us? <a href='/auth/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
  </div>
)})