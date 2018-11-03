import withData from '../src/config/apollo';
import { Container,Divider, Header,Label,Form, Grid, Input, Image,Icon, TextArea, Button} from "semantic-ui-react";
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
          <Grid.Column stretched width={10} >
            <Container text>
                <Label color="blue"><Icon name='caret up' /> 23</Label>
                <Label color="red"><Icon name='caret down' /> 2</Label>
                <Header as="h2">Something is wrong with this question</Header>
                <p>
                Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                    ancestors, which would have been pack hunters with complex body language. these
                </p>
            
                <Divider/>  
                <p>a| Students are confuse about proper answer to these questions.</p>
                <p>b| Students are confuse about proper answer to these questions.</p>
                <p>c| Students are confuse about proper answer to these questions.</p>
                <p>d| Students are confuse about proper answer to these questions.</p>

                <Label color='red' horizontal>English</Label> 
                <Label color='green' horizontal>Ans | A</Label> 
                <Label horizontal><Icon name='comments' /> 3</Label>

                <div align="right">
                    <Label pointing='right'>posted 3wks ago</Label>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' avatar />
                    <span>Joy</span>
                </div>

                <Divider hidden />
                <Divider hidden />
                <Header as="h4">Answers</Header>
                <Divider/>
                <p>
                Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                    ancestors, which would have been pack hunters with complex body language. these
                </p>
                <div>
                    <Label horizontal color="blue"><Icon name='caret up' /> 1</Label>
                    <Label horizontal color="red"><Icon name='caret down' /> 0</Label>
                    <div align="right">
                        <Label pointing='right'>posted 1wk ago</Label>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' avatar />
                        <span>Joy</span>
                    </div>
                </div>
                <Form>
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Your answer'
                    placeholder='This is what I think'
                    />
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Submit'
                    label=''
                    />
                </Form>
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

))
