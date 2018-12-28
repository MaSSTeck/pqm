import gql from "graphql-tag";

export const GET_FRESH_MQUESTIONS = gql`
query getFreshMQuestion{
    getFreshMQuestion{
    id,question,subject
  }
}
`
;
