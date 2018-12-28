import withData from '../src/config/apollo';
import Link from "next/link";
import { Container, Header,Grid} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'
import AskQuestion from '../src/components/question/AskQuestion'


export default withData(props => (
    <div>
    <HeaderFastQ titleText='Ask Question'/>
    <Container text style={{ marginTop: "2em" }}>
        <Header as="h1">Questions</Header>
        <p>
        Are you confuse about a question ask FastQuestion community?
        </p>
    </Container>
    <TopMenuBar/>
    
    <Container >
        <Grid divided='vertically'>
          <Grid.Row columns={3} >
            <Grid.Column width={3} only='large screen'>
              <LeftSideMenu/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={11} >
              <AskQuestion/>
            </Grid.Column>
            <Grid.Column width={2} only='large screen'>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>

    <FooterFastQ/>
  </div>

))
