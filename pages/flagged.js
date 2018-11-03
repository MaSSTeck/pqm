import withData from '../src/config/apollo';
import Link from "next/link";
import { Container,Divider, Header,Label, Grid} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import QuestionList from '../src/components/QuestionList'
import BestAnswers from '../src/components/BestAnswers'
import HotQuestions from '../src/components/HotQuestions'
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'

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
          <Grid.Column stretched width={10} >
            <Container text>
                <QuestionList/>
                <p>
                  <Link href="/question">Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                  ancestors, which would have been pack hunters with complex body language. These</Link>
                </p>
                <Label color='purple' horizontal>Mathematics</Label>
                <Divider/>
                <QuestionList/>
                <QuestionList/>
                <QuestionList/>
                <QuestionList/>
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
