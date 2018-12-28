import gql from "graphql-tag";

export const GET_MQUESTION_BY_ID = gql`
query getMQuestionById($questionId:String!) {

    getMQuestionById(id:$questionId){
    id,question,subject
  }
}
`;