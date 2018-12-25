import {Form, Grid, Input, Image,Icon,Message,TextArea, Button, Header, Divider,Label} from "semantic-ui-react";
import { ADD_COMMENT } from '../../graph/mutations/addCommentMutation';
import { Mutation } from 'react-apollo'
import { GET_COMMENTS } from '../../../src/graph/queries/getComments';
import { Query } from 'react-apollo'
import {FormatDate} from '../../config/functions'




export default class AnswersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment:"", error:false,loading:false, errorMessage:"", totalAnswer:""};

    }   

    loadResponse = (data, subject) =>{

      // console.log(data)
     // this.setState({totalAnswer:data.length})

      return data.map(answers =>{
        return<div>
          <Divider/>
          <p>{answers.comment}</p>
            <Label horizontal color="blue"><Icon name='caret up' /> 1</Label>
            <Label horizontal color="red"><Icon name='caret down' /> 0</Label>
            <div align="right">
                <Label pointing='right'>posted {FormatDate(answers.created_at)}</Label>
                <Image src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' avatar />
                <span>{answers.user.username}</span>
            </div>
        </div>
      })
    
    }
  
    render() {
      const {subject, questionId,} = this.props
      // const subject ='english'; const questionId = 1;
      return (
        <div>
            {this.state.error?<Message>{this.state.errorMessage}</Message>:""} 
            {this.state.loading? <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are sending your comment.
              </Message.Content>
            </Message>:""
          } 
         {/* <Header as="h2">{this.state.totalAnswer == 0? 'Answer' :this.state.totalAnswer+'Answer(s)'}</Header> */}

         <Header as="h2">Answers</Header>

          <Query query={GET_COMMENTS} variables={{questionId, subject}} pollInterval={60000}>
              {({ loading, error, data }) => {
              if (loading) return <div>Fetching...</div>
              if (error) return <div>{error.message}</div>
              if (data) return <div>{this.loadResponse(data.getComments, subject)}</div>
              }}
          </Query> 

         
        </div>
      );
    }
}
