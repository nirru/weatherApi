import {wehaterByCity} from "../service/weatherService";

export function getWeahterByCityOrZip(req,res) {
return wehaterByCity(req,res);
}