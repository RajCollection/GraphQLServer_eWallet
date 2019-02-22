import Customer from '../../models/customer';
var requestify = require('requestify'); 
var MyApp = {};

export const resolvers = {
    Query: {
        async getCustomer(root, { _id }) {
            return await Customer.findById(_id);
        },
        async allCustomers() {
            return await Customer.find();
        }
    },
    Mutation: {
        async createCustomer(root, { input }) {
            return await Customer.create(input);   
        },
        async updateCustomer(root, { _id, input }) {
            return await Customer.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteCustomer(root, { _id }) {
            return await Customer.findOneAndRemove({ _id });
        }
    }
};