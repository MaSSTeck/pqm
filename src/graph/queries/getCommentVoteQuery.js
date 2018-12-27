import gql from "graphql-tag";

export const GET_COMMENT_VOTES = gql`
query commentVotes($comment:String!) {

    commentVotes(comment:$comment){
        up_vote,
        down_vote
    }
}
`;
