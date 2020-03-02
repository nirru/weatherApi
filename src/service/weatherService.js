import fetch from 'node-fetch';
import {API_KEY, BASE_URL} from "../../config";

export async function wehaterByCity(req,res) {
    const city = req.query.city !== undefined ? req.query.city : 'newyork';
    const url = BASE_URL + "weather/?q=" + city + ",usa" + "&APPID=" + API_KEY ;
    fetch(url)
        .then(result=> result.json())
        .then(result => {
            return res.send({status:true,data:result});
    })
        .catch(err => res.send({status:false,data:err}));
}

