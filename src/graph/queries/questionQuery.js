import gql from "graphql-tag";

export const GET_QUESTION = gql`
query getQuestion($subject:String!,$exam:String, $year:String) {

  getQuestionBySubject(subject:$subject, exam:$exam, year:$year )){
    id,question,answer,year,
    option{
      a,b,c,d
    }
  }
}
`
;
