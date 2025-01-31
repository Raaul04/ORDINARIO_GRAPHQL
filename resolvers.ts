import { RestaurantModel,API_CLIMA,API_TIME } from "./types.ts"
import { GraphQLError } from "graphql";
import { ObjectId,Collection } from "mongodb";
type Context={
    RestaurantCollection:Collection<RestaurantModel>
}
type ArgsGetRestaurant={
    id:string
}
type ArgsAddRestaurant={
    id:string
    name:string,
    direccion:string,
    telefono:string
}
type ArgsDelete={
    id:string
}

export const resolvers = {
    Restaurant:{
        id:(parent:RestaurantModel):string=>{
            return parent._id!.toString();
        },
        temperatura:async(parent:RestaurantModel)=>{
            const api=Deno.env.get("API_KEY")
            if(!api){
                throw new GraphQLError("Error en la Api")
            }
            const url=`https://api.api-ninjas.com/v1/weather?lat=${parent.latitude}&lon=${parent.longitude}`
            const data= await fetch(url,{
                headers: {
                    'X-Api-Key': api
                  },
            })
            if(data.status!==200){throw new GraphQLError("Error en la peticion de la api del Clima")}
            const response:API_CLIMA= await data.json()
            const temp=response.temp

            return temp
        },
        datetime:async(parent:RestaurantModel)=>{
            const api=Deno.env.get("API_KEY")
            if(!api){
                throw new GraphQLError("Error en la Api")
            }
            const url=`ttps://api.api-ninjas.com/v1/worldtime?timezone=${parent.timezone}`
            const dataTime= await fetch(url,{
                headers: {
                    'X-Api-Key': 'nyNihb/AhHFDFFdAk3RFiQ==KJaDgoIF9Y5rCoEo'
                  },
            })
            if(dataTime.status!==200){
                throw new GraphQLError("Error en la peticion de la API del tiempo")
            }
            const response:API_TIME= await dataTime.json()
            const  datatime=response.datetime
            return datatime
        }

    },

    Query: {
        getRestaurant:async (_:unknown,args:ArgsGetRestaurant,ctx:Context):Promise<RestaurantModel|null> =>{
            return await ctx.RestaurantCollection.findOne({args})
        },
        getRestaurants:async(_:unknown,__:unknown, ctx:Context):Promise<RestaurantModel[]>=>{
            return await ctx.RestaurantCollection.find().toArray()
        }
    },
    Mutation:{

        deleteRestaurant:async(_:unknown,args:ArgsDelete,ctx:Context):Promise<boolean>=>{
            const {deletedCount}= await ctx.RestaurantCollection.deleteOne(args)
            return deletedCount===1
        },

        addRestaurant:async(_:unknown,args:ArgsAddRestaurant,ctx:Context)=>{
            const telefono=args
            const telefonoExistente= await ctx.RestaurantCollection.findOne(telefono)
            if(telefonoExistente){
                throw new GraphQLError("Ya hay un telefono en la base de de datos")
            }
            const insertedId= await ctx.RestaurantCollection.insertOne
            

            
            
        }
    }

}