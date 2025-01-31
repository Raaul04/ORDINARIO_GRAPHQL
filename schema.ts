export const schema = `#graphql
    type Restaurant{
        id:ID!,
        name:String!,
        direccion:String!,
        telefono:String!,
        temp:Int!,
        datetime:String!,
    }
    type Query{
        getRestaurant(id:ID!):Restaurant
        getRestaurants:[Restaurant]!
    }
    type Mutation{
        addRestaurant(name:String!,direccion:String!,ciudad:String!,telefono:String!):Restaurant!
        deleteRestaurant(id:ID!):Boolean!
    }

`;
