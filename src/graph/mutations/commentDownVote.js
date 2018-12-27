import gql from "graphql-tag";

export const COMMENT_DOWN_VOTE = gql`
mutation($comment:String!,$user:String!) {
    commentDownVote(comment: $comment,user: $user) {
      id,
      up_vote
      down_vote
  }
}
`; 
