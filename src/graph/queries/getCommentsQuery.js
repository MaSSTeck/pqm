import gql from "graphql-tag";

export const GET_COMMENTS = gql`
query getComments($questionId:Int!, $subject:String!) {

    getComments(questionId:$questionId,subject:$subject){
        id,comment,created_at
        user{
            id
            username
        }
  }
}
`;
