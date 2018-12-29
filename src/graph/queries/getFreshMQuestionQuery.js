import gql from "graphql-tag";

export const GET_FRESH_MQUESTIONS = gql`
query getFreshMQuestion{
    getFreshMQuestion{
    id,question,subject,
    questionVote{
      up_vote,
      down_vote
    },
    comment{
      id
    }

  }
}
`
;
