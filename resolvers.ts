import { RestaurantModel } from "./types.ts"
import { GraphQLError } from "graphql";
import { ObjectId,Collection } from "mongodb";
type Context={
    RestaurantCollection:Collection<RestaurantModel>
}
type ArgsGetRestaurant={
    id:string
}

export const resolvers = {
    Restaurant:{
        id:(parent:RestaurantModel):string=>{
            return parent._id!.toString();
        }
        //datetime

    },

    Query: {
        getRestaurant:async (_:unknown,args:ArgsGetRestaurant,ctx:Context):Promise<RestaurantModel|null> =>{
            return await ctx.RestaurantCollection.findOne({args})
        },
        getRestaurants:async(_:unknown,__:unknown, ctx:Context):Promise<RestaurantModel[]>=>{
            return await ctx.RestaurantCollection.find().toArray()
        }
    },

}