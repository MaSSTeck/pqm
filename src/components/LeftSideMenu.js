import { List, Divider} from "semantic-ui-react";


const LeftSideMenu = () => (
    <div>
        <List>
            <List.Item>
                <List.Icon name='home' />
                <List.Content>Home</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='users' />
                <List.Content>Members</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='student' />
                <List.Content>
                <a href='mailto:jack@semantic-ui.com'>Scholarship</a>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='game' />
                <List.Content>
                <a href='http://www.semantic-ui.com'>ALOC Games</a>
                </List.Content>
            </List.Item>
            </List>
        
            <Divider/>
            <List>
            <List.Item>
                <List.Icon name='caret right' />
                <List.Content>
                    <List.Header>Subject</List.Header>
                </List.Content>
            </List.Item>
            
            <List.Item>
                <List.Icon name='caret right' />
                <List.Content>
                <List.Header>Exam</List.Header>
                <List.List>
                    <List.Item>
                    <List.Icon name='tag' />
                    <List.Content>
                        <List.Description>Jamb</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name='tag' />
                    <List.Content>
                        <List.Description>Waec</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name='tag' />
                    <List.Content>
                        <List.Description>Neco</List.Description>
                    </List.Content>
                    </List.Item>
                
                </List.List>
                </List.Content>
            </List.Item>
            
            <List.Item>
                <List.Icon name='caret right' />
                <List.Content>
                <List.Header>Year</List.Header>
                <List.List>
                    <List.Item>
                    <List.Icon name='star outline' />
                    <List.Content>
                        <List.Description>1999</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name='star outline' />
                    <List.Content>
                        <List.Description>2000</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name='star outline' />
                    <List.Content>
                        <List.Description>2001</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Icon name='star outline' />
                    <List.Content>
                        <List.Description>2002</List.Description>
                    </List.Content>
                    </List.Item>
                
                </List.List>
                </List.Content>
            </List.Item>
        </List>
    </div> 
);

export default LeftSideMenu;