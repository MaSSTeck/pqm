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
                    <Menu.Item as="a" active><Link href="/">Home</Link></Menu.Item>
                    <Menu.Item as="a"><Link href="/quiz">Quiz</Link></Menu.Item>
                    <Menu.Item as="a"><Link href="/aloc-api">API</Link></Menu.Item>
                    <Menu.Item as="a"><Link href="/moderate">Moderate</Link></Menu.Item>
                    <Menu.Item position="right">
                    <Button as="a" inverted>Log in</Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
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