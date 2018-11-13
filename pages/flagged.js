import withData from '../src/config/apollo';
import Link from "next/link";
import { Container,Divider, Header,Label, Grid} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import TopQuestion from '../src/components/TopQuestion'
import BestAnswers from '../src/components/BestAnswers'
import HotQuestions from '../src/components/HotQuestions'
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'
import { GET_TOP_QUESTIONS } from '../src/graph/queries/questionsTop';
import { Query } from 'react-apollo'
import ReactHtmlParser from 'react-html-parser';
import { UppperCaseFirst, Color4Subject } from '../src/config/functions'

const loadQuestion = (topQuestion) =>{

  return topQuestion.map(questions =>{
    return <TopQuestion 
            question={ReactHtmlParser(questions.question)}
            subject={UppperCaseFirst(questions.subject)}
            subjectColor={Color4Subject(questions.subject)}/>
    }
  );
}

export default withData(props => (
    <div>
    <HeaderFastQ titleText='Flagged'/>
    <Container text style={{ marginTop: "2em" }}>
      <Header as="h1">Top Questions</Header>
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
          <Grid.Column mobile={16} tablet={16} computer={10}>
            <Container text>
               
                <Query query={GET_TOP_QUESTIONS}>
                    {({ loading, error, data }) => {
                      if (loading) return <div>Fetching...</div>
                      if (error) return <div>{error.message}</div>
                      if (data) return <div>{loadQuestion(data.getTopQuestions)}</div>
                    }}
                </Query>  
            </Container>
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

))
