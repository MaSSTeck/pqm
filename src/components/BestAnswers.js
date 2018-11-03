import { Image, List} from "semantic-ui-react";
import Link from "next/link";


const BestAnswers = () => (
    <div>
        <List divided verticalAlign='middle'>
            <List.Item>
                <Link href="/public-profile"><Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' /></Link>
                <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <List.Content>
                <List.Header as='a'>Elliot Fu</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <List.Content>
                <List.Header as='a'>Elliot Fu</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <List.Content>
                <List.Header as='a'>Elliot Fu</List.Header>
                </List.Content>
            </List.Item>
            </List>

    </div> 
);

export default BestAnswers;