import { Label,Icon,Message} from "semantic-ui-react";
import { QUESTION_DOWN_VOTE } from '../../graph/mutations/questionDownVote';
import { QUESTION_UP_VOTE } from '../../graph/mutations/questionUpVote';
import { Mutation } from 'react-apollo'


export default class QuestionVote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment:"", error:false,errorMessage:"", up:this.props.up, down:this.props.down};
      this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = async (doVote) => {
      const token = await localStorage.getItem('auth-token')
      if(!token){
        this.setState({error:true}), 
        this.setState({errorMessage: "Please Login to Vote"})
      }else{
        this.setState({loading:true}) 
        const user = await localStorage.getItem('auth-id')
        const {subject, questionId} = this.props
        doVote({variables: {user, subject,questionId}});
      }
    }
   
  
    render() {
       
      return (
        <div>
             {this.state.error?<Message negative>{this.state.errorMessage}</Message>:""} 
             <Mutation
                    mutation={QUESTION_UP_VOTE}
                    onCompleted={data => {
                        this.setState({error:false}), 
                        this.setState({up:data.questionUpVote.up_vote})
                        this.setState({down:data.questionUpVote.down_vote})
                    }}
                    onError={(error)=> {
                    this.setState({error:true}),
                    this.setState({errorMessage: error.message})
                    }} >

                    { (doVote) => (
                    <Label color="blue"  
                        onClick={this.doSubmit.bind(this, doVote)}>
                        <Icon name='caret up' /> {this.state.up}</Label>
                
                    )}
            </Mutation>

            <Mutation
                    mutation={QUESTION_DOWN_VOTE}
                    onCompleted={data => {
                        this.setState({error:false}), 
                        this.setState({up:data.questionDownVote.up_vote})
                        this.setState({down:data.questionDownVote.down_vote})
                    }}
                    onError={(error)=> {
                    this.setState({error:true}),
                    this.setState({errorMessage: error.message})
                    }} >

                    { (doVote) => (
                    <Label color="red"  
                        onClick={this.doSubmit.bind(this, doVote)}>
                        <Icon name='caret down' /> {this.state.down}</Label>
                
                    )}
            </Mutation>
        </div>
      );
    }
}
