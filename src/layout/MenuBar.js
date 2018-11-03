import React, { Component } from "react";
import Link from "next/link";
import { Container,Button, Visibility, Menu, Segment} from "semantic-ui-react";


const MenuBar =  ()=> {

    return(
        <div>
           <Visibility>
            <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 100, padding: "1em 0em" }}
                vertical
            >
                <Container>
                <Menu inverted pointing secondary size="large">
                    <Menu.Item as="a" active href="/">Home</Menu.Item>
                    <Menu.Item as="a" href="/aloc-api">API</Menu.Item>
                    <Menu.Item as="a" href="/flagged">Flagged</Menu.Item>
                    <Menu.Item position="right">
                    <Button as="a" inverted href="/auth/login">Log in</Button>
                    <Button as="a" inverted href="/auth/signup" style={{ marginLeft: "0.5em" }}>
                        Sign Up
                    </Button>
                    </Menu.Item>
                </Menu>
                </Container>
            
            </Segment>
            </Visibility>
        </div>
    );
}

export default MenuBar;