import gql from "graphql-tag";

export const ADD_COMMENT = gql`
mutation($questionId:String!, $subject:String!,$comment:String!,$user:String!) {
  addComment(questionId: $questionId, subject: $subject, comment:$comment, user: $user) {
      id,
      comment,
  }
}
`;
