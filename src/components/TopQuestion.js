import React, { Component } from "react";
import { Divider, Icon, Image,Label} from "semantic-ui-react";
import Link from "next/link";


const TopQuestion = (props) => {
  const {question,questionId,subject, subjectColor, maskURL, upVote,downVote,comment,fresh} = props;

  return(
    <div>
      <p>
      {fresh?<Link as={`/mq/${maskURL}/${questionId}/${subject}`} href={`/m-question?id=${questionId}&subject=${subject}`} ><a>{question}</a></Link>
            :<Link as={`/q/${maskURL}/${questionId}/${subject}`} href={`/question?id=${questionId}&subject=${subject}`} ><a>{question}</a></Link>
      }
      </p>
      <Label color={subjectColor} horizontal>{subject}</Label>  
      <Label horizontal><Icon name='caret up' /> {upVote}</Label>
      <Label horizontal><Icon name='caret down' /> {downVote}</Label>
      <Label horizontal><Icon name='comments' /> {comment}</Label>

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
  