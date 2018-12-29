import gql from "graphql-tag";

export const GET_TOP_QUESTIONS = gql`
query getTopQuestions {

  getTopQuestions{
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
`;
