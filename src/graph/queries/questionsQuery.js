import gql from "graphql-tag";

export const GET_QUESTIONS = gql`
query getQuestions($subject:String!, $limit:Int, $exam:String, $year:String) {

  getQuestionBySubject(subject:$subject, limit:$limit, type:$exam, year:$year )){
    id,question,answer,year,
    option{
      a,b,c,d
    }
  }
}
`
;
