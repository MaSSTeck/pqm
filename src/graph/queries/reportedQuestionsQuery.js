import gql from "graphql-tag";

export const GET_REPORTED_QUESTIONS = gql`
query getReportedQuestions($limit:Integer) {

  getReportedQuestions(limit:$limit)){
    id,fullname,question_id,subject,status
    type{
      name,
      description
    }
  }
}
`
;
