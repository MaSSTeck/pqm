import withData from '../src/config/apollo';
import { Container, Button, Dropdown, Header,Icon, Menu} from "semantic-ui-react";
import HeaderFastQ from '../src/layout/HeaderFastQ';
import FooterFastQ from '../src/layout/FooterFastQ';
import { GET_QUESTION } from '../src/graph/queries/questionQuery';
import { Query } from 'react-apollo'
import { ApolloConsumer } from "react-apollo";
import ReactHtmlParser from 'react-html-parser';
  
  const Paragraph = () => (
    <p>
      {[
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
        "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
        "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
        "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
        "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
        "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
        "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
        "accumsan porttitor, facilisis luctus, metus"
      ].join("")}
    </p>
  );
 
  const subject = 'english';


export default withData(props => (
    <div>
        <HeaderFastQ titleText='Take a Quiz'/>
        <Container text style={{ marginTop: "2em" }}>
            <Header as="h1">Quiz</Header>
            <p>
                Start preparation for an examination by taking a simple test
            </p>
            <div>
                <ApolloConsumer>
                    {client =>  <Button primary >Primary</Button>}
                </ApolloConsumer>
                <Button secondary >Secondary</Button>
            </div>
            <Query query={GET_QUESTION} variables={{subject}}>
                    {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>{ console.log(error.message)}</div>
                    if (data) return <div>
                                <h2>Question from API:</h2> 
                                <h4>Refresh page to load fresh question</h4> 
                                <p>Question: {ReactHtmlParser(data.getQuestion.question)} </p>
                                <p>A: {data.getQuestion.option.a} </p>
                                <p>B: {data.getQuestion.option.b} </p>
                                <p>C: {data.getQuestion.option.c} </p>
                                <p>D: {data.getQuestion.option.d} </p>
                                </div>
    
                    }}
            </Query>
        </Container>

        <Menu
        style={{
            background: "#f7f7f7",
            border: "none",
            borderRadius: 0,
            boxShadow: "none",
            marginTop: "4em",
            transition: "box-shadow 0.5s ease, padding 0.5s ease"
        }}
        >
        <Container text>
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
            <Menu.Item as="a">Articles</Menu.Item>

            <Menu.Menu position="right">
            <Dropdown text="Dropdown" pointing className="link item">
                <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                    <i className="dropdown icon" />
                    <span className="text">Submenu</span>
                    <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Menu>
        </Container>
        </Menu>

        <Container text>
            <div style={{ float: "left", margin: "0em 3em 1em 0em" }}>
                <Menu icon="labeled" vertical>
                <Menu.Item>
                    <Icon name="twitter" />
                    Twitter
                </Menu.Item>

                <Menu.Item>
                    <Icon name="facebook" />
                    Facebook
                </Menu.Item>

                <Menu.Item>
                    <Icon name="mail" />
                    Email
                </Menu.Item>
                </Menu>
            </div>

            <Paragraph />
            <Paragraph />
        </Container>
        <FooterFastQ/>
  </div>

))
