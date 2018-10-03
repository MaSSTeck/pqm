import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Question {
    id: Int!
    subject: String!
    question: String!
    option: Option
    answer: String!
    examtype: String!
    examyear: String!
  }

  type Option {
    a: String,
    b: String,
    c: String,
    d: String
  }

  type Query {

    getQuestion(subject:String!, type:String, year:String): Question
    getQuestions(limit:Int!,subject:String!, type:String, year:String): [Question]
    getManyQuestions(subject:String!, type:String, year:String): [Question]

  }
`;