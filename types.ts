import { OptionalId } from "mongodb";
export type RestaurantModel=OptionalId<{
    name:string,
    direccion:string,
    telefono:string
    latitude:number,
    longitude:number,
    timezone:string
}>

//https://api.api-ninjas.com/v1/weather
export type API_CLIMA={
    temp:number
}
//https://api.api-ninjas.com/v1/worldtime
export type API_TIME={
    datetime:string
}
