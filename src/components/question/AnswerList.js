import {Form, Grid, Input, Image,Icon,Message,TextArea, Button, Header, Divider,Label} from "semantic-ui-react";
import { ADD_COMMENT } from '../../graph/mutations/addCommentMutation';
import { Mutation } from 'react-apollo'
import { GET_COMMENTS } from '../../graph/queries/getCommentsQuery';
import { Query } from 'react-apollo'
import {FormatDate} from '../../config/functions'
import CommentVote from '../../components/question/CommentVote'
import { GET_COMMENT_VOTES } from '../../graph/queries/getCommentVoteQuery';



export default class AnswersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment:"", error:false,loading:false, errorMessage:"", totalAnswer:""};

    }   

    loadResponse = (data, subject) =>{

      return data.map(answers =>{
        return<div>
          <Divider/>
          <p>{answers.comment}</p>
          <Query query={GET_COMMENT_VOTES} variables={{comment:answers.id}}>
                {({ loading, error, data }) => {
                    if (data){
                        let dataDetails = data.commentVotes;
                        if(dataDetails == null){
                            return <CommentVote commentId={answers.id}  up={0} down={0}/>
                        }
                        return <CommentVote commentId={answers.id}  up={dataDetails.up_vote} down={dataDetails.down_vote}/>
                    } 
                }}
            </Query> 
           
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
