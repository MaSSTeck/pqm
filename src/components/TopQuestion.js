import React, { Component } from "react";
import { Divider, Icon, Image,Label} from "semantic-ui-react";
import Link from "next/link";


const TopQuestion = (props) => {
  const {question,subject, subjectColor} = props;
  
  return(
    <div>
      <p>
      {/* <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}> */}
      <Link as={`/question/sdsdsdsdsd`} href="/question"><a>{question}</a></Link>
      </p>
      <Label color={subjectColor} horizontal>{subject}</Label>  
      <Label horizontal><Icon name='caret up' /> 23</Label>
      <Label horizontal><Icon name='caret down' /> 2</Label>
      <Label horizontal><Icon name='comments' /> 3</Label>

      <div align="right">
        <Label pointing='right'>posted 3wks ago</Label>
        <Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' avatar />
        <span>Joy</span>
      </div>
      <Divider/>  
    </div>
  )
}

export default TopQuestion;
  