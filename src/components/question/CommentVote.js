import { Label,Icon,Message} from "semantic-ui-react";
import { COMMENT_DOWN_VOTE } from '../../graph/mutations/commentDownVote';
import { COMMENT_UP_VOTE } from '../../graph/mutations/commentUpVote';
import { Mutation } from 'react-apollo'


export default class CommentVote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error:false,errorMessage:"", up:this.props.up, down:this.props.down};
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
        const comment = this.props.commentId
        doVote({variables: {user, comment}});
      }
    }
   
  
    render() {
       
      return (
        <div>
             {this.state.error?<Message negative>{this.state.errorMessage}</Message>:""} 
             <Mutation
                    mutation={COMMENT_UP_VOTE}
                    onCompleted={data => {
                        this.setState({error:false}), 
                        this.setState({up:data.commentUpVote.up_vote})
                        this.setState({down:data.commentUpVote.down_vote})
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
                    mutation={COMMENT_DOWN_VOTE}
                    onCompleted={data => {
                        this.setState({error:false}), 
                        this.setState({up:data.commentDownVote.up_vote})
                        this.setState({down:data.commentDownVote.down_vote})
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
