import PropTypes from 'prop-types'
import withData from '../src/config/apollo';
import Head from "next/head";
import 'semantic-ui-css/semantic.min.css'
import HomepageHeading from '../src/components/home/HomepageHeading'
import DesktopContainer from '../src/components/home/DesktopContainer'
import MobileContainer from '../src/components/home/MobileContainer'
import FooterFastQ from '../src/layout/FooterFastQ';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => {
  testing()
  return <div>
    <Head>
      <title>Fast | Question </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>
    </Head>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>

  
}
const testing = () =>{

  var details = {
    email: "a@g.com",
    password: 'password'
  }

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");



  fetch('http://138.68.159.246:9000/tremendoc/api/account/authenticate', {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }, 
  body: formBody
}).then(res=>res.json())
  .then(res => console.log(res));
}
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default withData(props => (

  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Empower Students
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Community members upload questions, manage answers and revise Past Examination Questions (UTME, WASSCE, NECO, Post-UTME). We give students and educators superpowers to disagree and agree on questions and solutions.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Developers Happy
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes! Be Happy. We open our API endpoints, giving software developers access to over 6,000 past questions. You can now build awesome educational apps using our endpoints. 
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What is PQM"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Hey! It means Past Question Manager
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What is it all about"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              An open source educational platform that enables students take unlimited amount of quiz. You can also report or modify questions that have typographical error, wrong answers or poorly explained solution.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Are we Different?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          That is a question. Unfortunately we don't have all the answers but together we can find the best appropriate answer(s) to every past question. Community members don't just provide answer, they talk about answers. 
        </p>
        <Button as="a" size="large">Read More</Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Have you Heard about RANT?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          I mean 'Rating', when you upload questions, answers or make revisions you can be up voted or down voted by the community. The best answers always win.
        </p>
        <Button as="a" size="large">Please, take me there</Button>
      </Container>
    </Segment>
    <FooterFastQ/>
  </ResponsiveContainer>
))