import { Container, Dropdown, Menu} from "semantic-ui-react";

const TopMenuBar = () => (
    <div>
       <Menu
        style={{
            background: "#f7f7f7",
            border: "none",
            borderRadius: 0,
            boxShadow: "none",
            marginTop: "2em",
            transition: "box-shadow 0.5s ease, padding 0.5s ease"
        }}
        >
        <Container text>
            <Menu.Item header>FastQ</Menu.Item>
            <Menu.Item as="a">Subject</Menu.Item>
            <Menu.Item as="a">Quiz</Menu.Item>
            <Menu.Item as="a">Members</Menu.Item>


            <Menu.Menu position="right">
            <Dropdown text="Tags" pointing className="link item">
                <Dropdown.Menu>
                <Dropdown.Item>Subject</Dropdown.Item>
                <Dropdown.Item>Jamb</Dropdown.Item>
                <Dropdown.Item>Waec</Dropdown.Item>
                <Dropdown.Item>Neco</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Year</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Menu>
         </Container>
        </Menu>
    </div> 
);

export default TopMenuBar;