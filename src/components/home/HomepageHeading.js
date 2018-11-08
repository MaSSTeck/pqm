import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Link from "next/link";

import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Fast Question'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    
    <Header
      as='h2'
      content='Community Answers to Past Questions'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <h1>
      <Link ><a href="/flagged">Ask | Learn | Vote</a></Link>
    </h1>
  </Container>
)
export default HomepageHeading;
