import gql from "graphql-tag";

export const GET_QUESTION_BY_ID = gql`
query getQuestionById($questionId:String!, $subject:String!) {

  getQuestionById(id:$questionId,subject:$subject){
    id,question,answer,
    option{
      a,b,c,d
    }
  }
}
`;
