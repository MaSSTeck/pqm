import withData from '../src/config/apollo';
import { Container,Divider, Header,Label,Form, Grid, Input, Image,Icon, TextArea, Button} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import BestAnswers from '../src/components/BestAnswers'
import HotQuestions from '../src/components/HotQuestions'
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'
import { GET_MQUESTION_BY_ID } from '../src/graph/queries/getMQuestionQuery';
import { GET_QUESTION_VOTES } from '../src/graph/queries/getQuestionVoteQuery';
import { Query } from 'react-apollo'
import ReactHtmlParser from 'react-html-parser';
import { Color4Subject } from '../src/config/functions'
import { Mutation } from 'react-apollo'
import CommentForm from '../src/components/question/CommentForm'
import AnswerList from '../src/components/question/AnswerList'
import QuestionVote from '../src/components/question/QuestionVote'


const loadQuestion = (data, subject) =>{

      return <div> 
            <p>{ReactHtmlParser(data.question)} </p>
            {/* <p>A| {data.option_a} </p>
            <p>B| {data.option_b} </p>
            <p>C| {data.option_c} </p>
            <p>D| {data.option.d} </p> */}

            <Label color={Color4Subject(subject)} horizontal>{subject}</Label> 
            {/* <Label color='green' horizontal>Ans | {data.answer.toUpperCase()}</Label>  */}
            <Label horizontal><Icon name='comments' /> 3</Label>
        </div>
  }

  
export default withData(props => {

    const  questionId = props.url.query.id;
    const subject = props.url.query.subject;
    console.log(questionId ,subject)
    return(
        <div>
        <HeaderFastQ titleText='Flagged'/>
        <Container text style={{ marginTop: "2em" }}>
            <Header as="h1">Questions</Header>
            <p>
                Students are confuse about proper answer to these questions. Do you want to give solution?
            </p>
        </Container>
        <TopMenuBar/>
    

        <Container >
        <Grid divided='vertically'>
            <Grid.Row columns={3} >
            <Grid.Column width={3} only='large screen'>
                <LeftSideMenu/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={10} >
                <Container text>
                    {/* <QuestionVote questionId={questionId} subject={subject} up={8} down={0}/>
                    <Header as="h2">Something is wrong with this question</Header> */}
                    
                    <Query query={GET_QUESTION_VOTES} variables={{questionId,subject}}>
                        {({ loading, error, data }) => {
                            if (data){
                                let dataDetails = data.questionVotes;
                                if(dataDetails == null){
                                    return <QuestionVote questionId={questionId} subject={subject} up={0} down={0}/>
                                }
                                return <QuestionVote questionId={questionId} subject={subject} up={dataDetails.up_vote} down={dataDetails.down_vote}/>
                            } 
                        }}
                    </Query> 
                    <Header as="h2">Whoops! Something is wrong with this question</Header>

                    <Query query={GET_MQUESTION_BY_ID} variables={{questionId}}>
                        {({ loading, error, data }) => {
                        if (loading) return <div>Fetching...</div>
                        if (error) return <div>{error.message}</div>
                        if (data) return <div>{loadQuestion(data.getMQuestionById, subject)}</div>
                        }}
                    </Query> 

                    <div align="right">
                        <Label pointing='right'>posted 3wks ago</Label>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' avatar />
                        <span>Joy</span>
                    </div>

                    <Divider hidden />
                    <Divider hidden />

                    <AnswerList questionId={questionId} subject={subject}/>
                    <CommentForm questionId={questionId} subject={subject}/>

                    <Divider hidden />
                    <Divider hidden />
                </Container>
                <p>Ask your <a href="/ask-question">question</a></p>

            </Grid.Column>
            <Grid.Column width={3} only='large screen'>
                <Header as="h4">Week: Best Answer</Header>
                <BestAnswers/>
                <Divider/>
                <Header as="h4">Hot Questions</Header>
                <HotQuestions/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>

        <FooterFastQ/>
    </div>
    )
})