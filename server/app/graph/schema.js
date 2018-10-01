import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Car {
    id: Int!
    plateNumber: String!
    color: String!
    model: String!
    chasisNumber: String!
    vehicleStatus: String!
    yearOfManufacture: Int!
    issueDate: String!
    expiryDate: String!
  }

  type Query {
    car(plateNumber: String!): Car
    cars: [Car]
  }
`;