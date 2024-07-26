import graphql, { GraphQLSchema } from "graphql"
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql
import _ from 'lodash'
import axios from "axios"
const users = [
    {
        id: "1",
        firstName: "Aditya",
        age: 20
    },
    {
        id: "2",
        firstName: "Anita",
        age: 22
    },
    {
        id: "3",
        firstName: "Ayswarjya",
        age: 22
    },
    {
        id: "4",
        firstName: "DhanaShri",
        age: 23
    }
]

//create user object 

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
})

//define root query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:8900/users/${args.id}`)
                    .then((resp) => resp.data)
            }
        }
    }
})

//addUSer => insert & update 

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser: {
            type: userType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                const { firstName, age } = args;
                return axios.post(`http://localhost:8900/users`, { firstName, age })
                    .then(response => response.data)
                    .catch(error => {
                        throw new Error(error)
                    })
            }
        }
    }
})





const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

export { schema }