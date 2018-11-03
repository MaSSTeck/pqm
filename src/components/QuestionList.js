import { Divider, Icon, Image,Label} from "semantic-ui-react";
import Link from "next/link";


const QuestionList = () => (
    <div>
      <p>
      <Link href="/question">Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
        ancestors, which would have been pack hunters with complex body language. These</Link>
      </p>
      <Label color='red' horizontal>English</Label>  
      <Label horizontal><Icon name='caret up' /> 23</Label>
      <Label horizontal><Icon name='caret down' /> 2</Label>
      <Label horizontal><Icon name='answers' /> 3</Label>

      <div align="right">
        <Label pointing='right'>posted 3wks ago</Label>
        <Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' avatar />
        <span>Joy</span>
      </div>
      <Divider/>  
    </div>
  );

export default QuestionList;
  