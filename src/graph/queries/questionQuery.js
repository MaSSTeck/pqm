import gql from "graphql-tag";

export const GET_QUESTION = gql`
query getQuestion($subject:String!, $exam:String, $year:String) {

  getQuestion(subject:$subject,type:$exam, year:$year){
    id,question,
    option{
      a,b,c,d
    }
  }
}
`;
