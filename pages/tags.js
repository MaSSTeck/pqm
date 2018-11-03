import withData from '../src/config/apollo';
import Link from "next/link";
import { Container,Divider, Header,Grid} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import LeftSideMenu from '../src/components/LeftSideMenu';
import QuestionTags from '../src/components/QuestionTags';


export default withData(props => (
    <div>
    <HeaderFastQ titleText='Flagged'/>
    <Container text style={{ marginTop: "2em" }}>
      <Header as="h1">Tags (all)</Header>
    </Container>    

    <Divider hidden/>
    <Container >
      <Grid divided='vertically'>
        <Grid.Row columns={2} >
          <Grid.Column width={3} only='large screen'>
             <LeftSideMenu/>
          </Grid.Column>
          <Grid.Column stretched width={13} >
            <QuestionTags/>
            <QuestionTags/>
            <QuestionTags/>
            <QuestionTags/>
            <Divider hidden/>
            <Divider hidden/>
          </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>

    <FooterFastQ/>
  </div>

))
