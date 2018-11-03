import { Container,Label, Grid, Divider} from "semantic-ui-react";

const QuestionTags = () => (
    <div>
        <Container >
            <Grid divided='vertically'>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Label color='red' horizontal>English</Label>
                        <Label  horizontal>x4,023</Label>   
                        <p>
                            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                        </p>
                        <Label  horizontal>Interactions x3</Label> 
                    </Grid.Column>
                    <Grid.Column>
                        <Label color='purple' horizontal>Mathematics</Label>
                        <Label  horizontal>x4,023</Label>   
                        <p>
                            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                        </p>
                        <Label  horizontal>Interactions x3</Label> 
                    </Grid.Column>
                    <Grid.Column>
                        <Label color='blue' horizontal>Commerce</Label>
                        <Label  horizontal>x4,023</Label>   
                        <p>
                            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                        </p>
                        <Label  horizontal>Interactions x3</Label> 
                    </Grid.Column>
                    <Grid.Column>
                        <Label color='green' horizontal>Geography</Label>
                        <Label  horizontal>x4,023</Label>   
                        <p>
                            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                        </p>
                        <Label  horizontal>Interactions x3</Label> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        <Divider hidden/>
    </div> 
);

export default QuestionTags;