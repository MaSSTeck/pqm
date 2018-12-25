import React from 'react'
import withData from '../../src/config/apollo';
import 'semantic-ui-css/semantic.min.css'
import Head from "next/head";
import Router from 'next/router'
import { Button, Form, Grid, Header, Icon, Message, Segment, Label, Dropdown } from 'semantic-ui-react'
import { SIGNUP } from '../../src/graph/mutations/signupMutation';
import { Mutation } from 'react-apollo'

export default withData(props => {

  class SignUpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email:"", password: "", username:"",gender:"", error:false, errorMessage:""};
      this.verifyEntries = this.verifyEntries.bind(this);

    }

    saveUserToken = async data => {
      localStorage.setItem('auth-token', data.token)
      localStorage.setItem('auth-id', data.user.id)
      Router.push('/flagged')
    }
    // doSubmit = (doAddGroup, obj, e) => {
    verifyEntries = (mutation) =>{
      console.log('sdsdsd');
      mutation;
    }
   
    handleDropDown = (name, event) => {
        let value="Male";
  
        if (event.target.value !== undefined) {
          value = event.target.value;
          console.log('got if',value)

        } else {
          value = event.target.textContent;
          console.log('got else',value)
        }
        console.log(value)
        //let newExtraInfo = Object.assign(this.state.extraInfo, { name: value })
        this.setState({ gender: value});
      }
    
    genderOptions = [ { key: 'Male', value: 'Male', text: 'Male' }, 
                      { key: 'Female', value: 'Female', text: 'Female' } ]

    
    render() {
      const { email, password, username ,gender} = this.state
      return (
        <div>
            {this.state.error?<Message>{this.state.errorMessage}</Message>:""} 

           <Form size='large'>
            <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                    onChange={e => this.setState({ username: e.target.value })}
                    type="text" value={this.state.username} />

                  <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address'
                     onChange={e => this.setState({ email: e.target.value })}
                     type="text" value={this.state.email}  />


                  <Form.Dropdown fluid placeholder='Gender' search selection options={this.genderOptions} 
                       name='gender'
                       defaultValue={this.state.gender}
                       onChange={(e) => this.handleDropDown('gender', e)} />

                  <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                     onChange={e => this.setState({ password: e.target.value })}
                    type="text" value={this.state.password} />

                  <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password'/>

                  <Mutation
                      mutation={SIGNUP}
                      variables={{ email, password, username, gender }}
                      onCompleted={data => this.saveUserToken(data.signup)}
                      // onCompleted={()=>console.log('The Query onCompleted callback was invoked')}
                      onError={(error)=> {
                        this.setState({error:true}), 
                        this.setState({errorMessage: error.message})
                       }}  >

                      {mutation => (
                        // <Button color='teal' fluid size='large' onClick={this.verifyEntries.bind(this, mutation)}>
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
          <title>FastQ | Sign in </title>
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
            <a href="/"><Icon name='settings' /> Create account</a>
          </Header>
          <SignUpForm/>
          <Message>
            New to us? <a href='/auth/login'>Log In</a>
          </Message>
        </Grid.Column>
      </Grid>
  </div>
)})
