import withData from '../src/config/apollo';
import Link from "next/link";
import { Container,Divider, Header,Label,Form,Segment, Grid, Input, Card,Image,Icon, TextArea, Button} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import BestAnswers from '../src/components/BestAnswers'
import HotQuestions from '../src/components/HotQuestions'
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'

export default withData(props => (
    <div>
    <HeaderFastQ titleText='Flagged'/>
    <Container text style={{ marginTop: "2em" }}>
      <Header as="h1">Profile</Header>
    </Container>    

    <Divider hidden/>
    <Container >
      <Grid divided='vertically'>
        <Grid.Row columns={3} >
          <Grid.Column width={3} only='large screen'>
             <LeftSideMenu/>
          </Grid.Column>
          <Grid.Column stretched width={11} >
            <Container >
                <Grid stackable columns={2} divided>
                    <Grid.Row >
                    <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                            <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Students influenced: 45,000 </Segment>
                        <Segment>
                            <p>Vote Distribution</p> 
                            <Label color="blue"><Icon name='caret up' /> 23</Label>
                            <Label color="red"><Icon name='caret down' /> 2</Label>
                        </Segment>
                        <Segment>
                            <p>Badges</p> 
                            <Label horizontal><Icon name='certificate' /> 1</Label>
                            <Label horizontal><Icon name='bullseye' /> 14</Label>
                            <Label horizontal><Icon name='balance scale' /> 0</Label>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    <Divider hidden/>
                    <Divider hidden/>
                    <Divider hidden/>
                </Grid>
            </Container>
            <Divider hidden/>
            <Divider hidden/>
          </Grid.Column>
          <Grid.Column width={2} only='large screen'>
          </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>

    <FooterFastQ/>
  </div>

))
