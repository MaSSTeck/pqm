import { Container, Grid, Header, List, Segment} from "semantic-ui-react";

const FooterPQM =  ()=> {

    return(
        <div>
            <Segment inverted vertical style={{ padding: "5em 0em" }}>
                <Container>
                    <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Header inverted as="h4" content="About" />
                        <List link inverted>
                            <List.Item as="a">Sitemap</List.Item>
                            <List.Item as="a">Contact Us</List.Item>
                            <List.Item as="a">Past Questions API</List.Item>
                            <List.Item as="a">ALOC Games</List.Item>
                        </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h4" content="Services" />
                            <List link inverted>
                                <List.Item as="a">Subjects</List.Item>
                                <List.Item as="a">Exams</List.Item>
                                <List.Item as="a">PQM FAQ</List.Item>
                                <List.Item as="a">How To Moderate</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                        <Header as="h4" inverted>Direction</Header>
                        <p>
                            We are redefining how answers are provided to past questions 
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}

export default FooterPQM;
