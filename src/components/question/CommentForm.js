import {Form, Grid, Input, Image,Icon,Message,TextArea, Button} from "semantic-ui-react";
import { ADD_COMMENT } from '../../graph/mutations/addCommentMutation';
import { Mutation } from 'react-apollo'


export default class CommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment:"", error:false,loading:false, onComplete:false, errorMessage:""};
      this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = async (doComment) => {
      // console.log('dddd');
      const token = await localStorage.getItem('auth-token')
      if(!token){
        this.setState({error:true}), 
        this.setState({errorMessage: "Please Login to add comment"})
      }
      this.setState({loading:true}) 
      const user = await localStorage.getItem('auth-id')
      const {comment} = this.state
      const {subject, questionId} = this.props
      // console.log(comment,user,subject, questionId)
      doComment({variables: {comment, user, subject,questionId}});

    }
   
  
    render() {
      return (
        <div>
            {this.state.error?<Message negative>{this.state.errorMessage}</Message>:""} 
            {this.state.onComplete?<Message positive>Thank you for providing answer</Message>:""}
            {this.state.loading? <Message icon info>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are sending your comment.
              </Message.Content>
            </Message>:""
          } 

            <Form>
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Your answer'
                  placeholder='This is what I think'
                  onChange={e => this.setState({ comment: e.target.value })}
                />
                 <Mutation
                      mutation={ADD_COMMENT}
                      //variables={{ comment, user, subject,questionId }}
                      onCompleted={data => {
                         this.setState({error:false}), 
                         this.setState({loading:false}),
                         this.setState({onComplete:true}),
                         this.setState({comment:""}) }}
                      onError={(error)=> {
                        this.setState({error:true}), 
                        this.setState({loading:false}),
                        this.setState({onComplete:false}),
                        this.setState({errorMessage: error.message})
                       }}  >

                      { (doComment) => (
                      <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Submit'
                            label=''
                            onClick={this.doSubmit.bind(this, doComment)}
                            />
                      )}
                   </Mutation>
            </Form>
        </div>
      );
    }
}
