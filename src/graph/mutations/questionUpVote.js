import gql from "graphql-tag";

export const QUESTION_UP_VOTE = gql`
mutation($questionId:Int!, $subject:String!,$user:String!) {
    questionUpVote(questionId: $questionId, subject: $subject, user: $user) {
      id,
      up_vote
      down_vote
  }
}
`;
