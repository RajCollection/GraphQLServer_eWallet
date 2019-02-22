import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/index';

const typeDefs = `
        type Customer {
            _id: ID!
            name:String!,
            email:String!,
            phone:String!,
            kycID:String,
            kycStatus:String,
            aadhar:String!,
            passport:String,
            address:String,
            aadharStatus:String,
            passportStatus:String,
            addressStatus:String
        }
        type Query {
            getCustomer(_id: ID!): Customer
            allCustomers: [Customer]
        }
        input CustomerInput {
            name:String!,
            email:String!,
            phone:String!,
            kycID:String,
            kycStatus:String,
            aadhar:String!,
            passport:String,
            address:String,
            aadharStatus:String,
            passportStatus:String,
            addressStatus:String
        }
        type Mutation {
            createCustomer(input: CustomerInput) : Customer
            updateCustomer(_id: ID!, input: CustomerInput): Customer
            deleteCustomer(_id: ID!) : Customer
        }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;