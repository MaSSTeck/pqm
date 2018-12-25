import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation signup(
    $username: String!
    $gender: String
    $email: String!
    $password: String!
    ) {
        signup(
        username: $username
        gender: $gender
        email: $email
        password: $password
        ) {token, 
          user{id}
        }
      }
`;
