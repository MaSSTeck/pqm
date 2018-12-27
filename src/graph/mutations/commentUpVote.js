import gql from "graphql-tag";

export const COMMENT_UP_VOTE = gql`
mutation($comment:String!,$user:String!) {
    commentUpVote(comment: $comment,user: $user) {
      id,
      up_vote
      down_vote
  }
}
`; 
