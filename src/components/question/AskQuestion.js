import { Container,Divider, Form, Input, Message, Select, TextArea, Button,Accordion,Icon} from "semantic-ui-react";
import { ASK_QUESTION } from '../../graph/mutations/askQuestionMutation';
import { Mutation } from 'react-apollo'
import { LowerCaseFirst, FormatStringAsURL} from '../../config/functions'
import Router from 'next/router'

const ansOptions = [
    { key: 'a', text: 'A', value: 'a' },
    { key: 'b', text: 'B', value: 'b' },
    { key: 'c', text: 'C', value: 'c' },
    { key: 'd', text: 'D', value: 'd' },
]

const subjectOptions = [
    { key: 'accounting', text: 'Accounting', value: 'accounting' },
    { key: 'biology', text: 'Biology', value: 'biology' },
    { key: 'commerce', text: 'Commerce', value: 'commerce' },
    { key: 'chemistry', text: 'Chemistry', value: 'chemistry' },
    { key: 'crk', text: 'crk', value: 'crk' },
    { key: 'civiledu', text: 'Civiledu', value: 'civiledu' },
    { key: 'currentaffairs', text: 'Currentaffairs', value: 'currentaffairs' },
    { key: 'english', text: 'English', value: 'english' },
    { key: 'englishlit', text: 'Englishlit', value: 'englishlit' },
    { key: 'economics', text: 'Economics', value: 'economics' },
    { key: 'government', text: 'Government', value: 'government' },
    { key: 'geography', text: 'Geography', value: 'geography' },
    { key: 'history', text: 'History', value: 'history' },
    { key: 'irk', text: 'irk', value: 'irk' },
    { key: 'insurance', text: 'Insurance', value: 'insurance' },
    { key: 'mathematics', text: 'Mathematics', value: 'mathematics' },
    { key: 'physics', text: 'Physics', value: 'physics' },
    { key: 'others', text: 'Others', value: 'others' },
]

const panels = [
  {
    key: 'details',
    title: 'Optional Details',
    content: {
      as: Form.Input,
      label: 'Maiden Name',
      placeholder: 'Maiden Name',
    },
    
  },
]

export default class AskQuestion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {question:"",subject:"",error:false,loading:false, onComplete:false, errorMessage:""};
      this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = async (askQuestion) => {
    
        const token = await localStorage.getItem('auth-token')
        if(!token){
          this.setState({error:true}), 
          this.setState({errorMessage: "Please Login to Vote"})
        }else{
            const {subject, question} = this.state
            if(subject =="" || question ==""){
                this.setState({error:true}), 
                this.setState({errorMessage: "Aww! Fill the require fields"})
            }else{
                this.setState({error:false}) 
                const user = await localStorage.getItem('auth-id')
                askQuestion({variables: {user, subject,question}});
            }
        }
    }
    handleDropDown = (name, event) => {
        let value = event.target.textContent;
        // console.log(LowerCaseFirst(value))
        this.setState({ [name]: LowerCaseFirst(value)});
    }
   
  
    render() {
      return (
        <div>
            {this.state.error?<Message warning>{this.state.errorMessage}</Message>:""} 

            <Container text>
            
            <Mutation mutation={ASK_QUESTION}>
                {(askQuestion, {data, loading, error }) => 
                (
                                
                <Form>
                     {loading && <Message icon info>
                                    <Icon name='circle notched' loading />
                                    <Message.Content>
                                        <Message.Header>Just one second</Message.Header>
                                        We are sending your question to the galaxy.
                                    </Message.Content>
                                 </Message>
                     }
                     {error && <Message negative>{error.message}</Message>}
                     {data &&  Router.push(`/mq/${FormatStringAsURL(this.state.question)}/${data.askQuestion.id}/${data.askQuestion.subject}`)}
                     
                    <Form.Field control={Select} label='Select Subject*' options={subjectOptions} 
                        placeholder='Subject'
                        onChange={(e) => this.handleDropDown('subject', e)} />

                    <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Question*'
                        placeholder='Type your question' 
                        onChange={e => this.setState({ question: e.target.value })}
                    />
                    {/* <Form.Field id='form-optionA-control' control={Input} label='Option A'
                        placeholder='Enter option A'
                        onChange={e => this.setState({ option_a: e.target.value })}
                    />
                    <Form.Field id='form-optionB-control' control={Input} label='Option B'
                        placeholder='Enter option B'
                        onChange={e => this.setState({ option_b: e.target.value })}
                    />
                    <Form.Field id='form-optionC-control' control={Input} label='Option C'
                        placeholder='Enter option C'
                        onChange={e => this.setState({ option_c: e.target.value })}
                    />
                    <Form.Field id='form-optionD-control' control={Input} label='Option D'
                         placeholder='Enter option D'
                         onChange={e => this.setState({ option_d: e.target.value })}
                    />

                    <Accordion as={Form.Field} panels={panels} /> */}


                    {/* <Form.Field control={Select} label='Your Answer' options={ansOptions} 
                        placeholder='Select answer'
                        onChange={(e) => this.handleDropDown('answer', e)} /> */}

                    <Form.Field id='form-button-control-public' control={Button} content='Submit' 
                        label='' onClick={this.doSubmit.bind(this, askQuestion, {data,loading, error})}/>
                
                </Form>
                 )}
            </Mutation> 
            <Divider hidden />
            <Divider hidden />
            </Container>
        </div>
      );
    }
}
