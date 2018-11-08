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

class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>  
        <Header/>

          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'><Link><a href="/aloc-api">Home</a></Link></Menu.Item>
              <Menu.Item as='a'><Link><a href="/aloc-api">API</a></Link></Menu.Item>
              <Menu.Item as='a'><Link><a href="/aloc-api">Flagged</a></Link></Menu.Item>
              <Menu.Item as='a'><Link><a href="/aloc-api">Log in</a></Link></Menu.Item>
              <Menu.Item as='a'><Link><a href="/aloc-api">Sign Up</a></Link></Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '100vh' }}
            >
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 350, padding: '1em 0em' }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                      <Button as='a' inverted href="/auth/login">
                        Log in
                      </Button>
                      <Button as='a' href="/auth/signup" inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                <HomepageHeading mobile />
              </Segment>
  
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  } 

  export default MobileContainer