import gql from "graphql-tag";

export const ASK_QUESTION = gql`
mutation($subject:String!,$question:String!,$user:String!,$option_a:String,$option_b:String,
        $option_c:String,$option_d:String,$answer:String) {
            
    askQuestion(subject:$subject,question:$question,user:$user,option_a:$option_a,option_b:$option_b,
                option_c:$option_c,option_d:$option_d,answer:$answer) {
        id,
        subject,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        answer
  }
}
`;

