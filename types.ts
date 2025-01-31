import { OptionalId } from "mongodb";
export type RestaurantModel=OptionalId<{
    name:string,
    direccion:string,
    telefono:string
    temp:number 
    latitude:number,
    longitude:number,
    timezone?:string
    datetime?:string
}>

//https://api.api-ninjas.com/v1/weather
export type API_CLIMA={
    temp:number,
}
//https://api.api-ninjas.com/v1/worldtime
export type API_TIME={
    datetime:string
    timezone:string
}
