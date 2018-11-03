import withData from '../src/config/apollo';
import Link from "next/link";
import { Container,Divider, Header,Label,Form, Grid, Input, Select, Image,Icon, TextArea, Button} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import LeftSideMenu from '../src/components/LeftSideMenu'
import TopMenuBar from '../src/components/TopMenuBar'

const options = [
    { key: 'a', text: 'A', value: 'a' },
    { key: 'b', text: 'B', value: 'b' },
    { key: 'c', text: 'C', value: 'c' },
    { key: 'd', text: 'D', value: 'd' },

  ]

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
          <Grid.Column stretched width={11} >
            <Container text>
                <Form>
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Question*'
                    placeholder='Type your question'
                    />
                    <Form.Field
                    id='form-optionA-control'
                    control={Input}
                    label='Option A'
                    placeholder='Enter option A'
                    />
                     <Form.Field
                    id='form-optionB-control'
                    control={Input}
                    label='Option B'
                    placeholder='Enter option B'
                    />
                     <Form.Field
                    id='form-optionC-control'
                    control={Input}
                    label='Option C'
                    placeholder='Enter option C'
                    />
                     <Form.Field
                    id='form-optionD-control'
                    control={Input}
                    label='Option D'
                    placeholder='Enter option D'
                    />
                    
                    <Form.Field control={Select} label='Your Answer' options={options} placeholder='Select answer' />

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
          </Grid.Column>
          <Grid.Column width={2} only='large screen'>
            
          </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>

    <FooterFastQ/>
  </div>

))
