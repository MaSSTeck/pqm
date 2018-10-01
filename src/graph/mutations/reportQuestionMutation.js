import gql from "graphql-tag";

export const REPORT_A_QUESTION = gql`
    mutation($question_id: ID!,$subject:String!, $fullname:String, $message:String, type:Int) 
    {
        reportAQuestion(id:$question_id, subject:$subject, full_name:$fullname, message:$message, type:$type){
            status,message
        }
    }
`;