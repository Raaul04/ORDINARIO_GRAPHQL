import { OptionalId } from "mongodb";
export type RestaurantModel=OptionalId<{
    name:string,
    direccion:string,
    telefono:string
}>

//https://api.api-ninjas.com/v1/weather
export type API_CLIMA={
    latitude:string,
    longitude:string,
    temp:number
}
//https://api.api-ninjas.com/v1/worldtime
export type API_TIME={
    timezone:string
    datetime:string
}
