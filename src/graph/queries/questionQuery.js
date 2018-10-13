import gql from "graphql-tag";

export const GET_QUESTION = gql`
query getQuestion($subject:String!) {

  getQuestion(subject:$subject){
    id,question
  }
}
`;
