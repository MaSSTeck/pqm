import gql from "graphql-tag";

export const GET_QUESTION_VOTES = gql`
query questionVotes($questionId:String!, $subject:String!) {

    questionVotes(questionId:$questionId,subject:$subject){
        up_vote,
        down_vote
    }
}
`;
