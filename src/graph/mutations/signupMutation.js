import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation signup(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
    ) {
        signup(
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
        ) {token}
      }
`;
