
import 'semantic-ui-css/semantic.min.css'
import withData from '../src/config/apollo';
import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Container, Divider, Grid, Header, Menu, Segment,Visibility} from "semantic-ui-react";
// import './../src/styles/index.css'
import FooterPQM from '../src/layout/FooterFastQ';


export default withData(props => (
  <div>
    <Head>
      
        <title>Fast | Question </title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta> */}

    </Head>

    <Visibility>
      <Segment
        inverted
        textAlign="center"
        vertical
        style={{ minHeight:700, padding: "1em 0em" }}

      >
        <Container>
          <Menu inverted pointing secondary size="large">
            <Menu.Item as="a" active>Home</Menu.Item>
            {/* <Menu.Item as="a"><Link href="/quiz">Quiz</Link></Menu.Item> */}
            <Menu.Item as="a"><Link href="/aloc-api">API</Link></Menu.Item>
            <Menu.Item as="a"><Link href="/flagged">Flagged</Link></Menu.Item>
            <Menu.Item position="right">
              <Button as="a" inverted href="/auth/login">Log in</Button>
              <Button as="a" inverted href="/auth/signup" style={{ marginLeft: "0.5em" }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
        <Container text>
          <Header
            as="h1"
            content="FastQuestion"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          />
          <Header
            as="h2"
            content="Community Answers to Past Questions"
            inverted
            style={{ fontSize: "1.7em", fontWeight: "normal" }}
          />
          <h1>
            <Link href="/flagged">Ask | Learn | Vote</Link>
          </h1>
        </Container>
      </Segment>
    </Visibility>
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

    <FooterPQM/>
  </div>
))
