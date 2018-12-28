import gql from "graphql-tag";

export const QUESTION_DOWN_VOTE = gql`
mutation($questionId:String!, $subject:String!,$user:String!) {
    questionDownVote(questionId: $questionId, subject: $subject, user: $user) {
      id,
      up_vote
      down_vote
  }
}
`;
