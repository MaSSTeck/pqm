import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import HomepageHeading from './HomepageHeading'
import Link from "next/link";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
  
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>Home</Menu.Item>
                  <Menu.Item as='a'><Link><a href="/aloc-api">API</a></Link></Menu.Item>
                  <Menu.Item as='a'><Link><a href="/flagged">Flagged</a></Link></Menu.Item>

                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed} href="/auth/login">
                      Log in
                    </Button>
                    <Button as='a' href="/auth/signup" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  export default DesktopContainer