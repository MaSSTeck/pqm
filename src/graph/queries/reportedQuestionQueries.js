import gql from "graphql-tag";

export const GET_REPORTED_QUESTIONS = gql`
query getReportedQuestions($id:ID!) {

  getReportedQuestions(id:$id)){
    id,fullname,subject,status,
    question_id{
        id,question,answer,year,
        option{
        a,b,c,d
        } 
    },
    type{
      name,
      description
    }
  }
}
`
;
