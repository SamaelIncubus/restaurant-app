import Store from '../models/store'
import Product from '../models/Product'
import Client from '../models/client'
import Deliver from '../models/deliver'

var request = require ("request");

export async function reportStore(req, res) {
        const Aux = await Store.findAll();

    var data={
        template:{"shortid":"SyxNZmA3xU"},
        data:{"Stores": Aux}
    }
    var options = {
        uri: "http://localhost:5488/api/report",
        method:"POST",
        json:data
    }
    request(options).pipe(res);
   
}

export async function reportFood(req, res) {
    const Aux = await Product.findAll();

var data={
    template:{"shortid":"Hyg3plPnXI"},
    data:{"Foods": Aux}
}
var options = {
    uri: "http://localhost:5488/api/report",
    method:"POST",
    json:data
}
request(options).pipe(res);

}

export async function reportAllergens(req, res) {
    const Aux = await Product.findAll();

var data={
    template:{"shortid":"rkgT75P2mL"},
    data:{"Allergens": Aux}
}
var options = {
    uri: "http://localhost:5488/api/report",
    method:"POST",
    json:data
}
request(options).pipe(res);

}

export async function reportClient(req, res) {
    const Aux = await Client.findAll();

var data={
    template:{"shortid":"rke7ggO3QU"},
    data:{"Clients": Aux}
}
var options = {
    uri: "http://localhost:5488/api/report",
    method:"POST",
    json:data
}
request(options).pipe(res);

}

export async function reportDeliver(req, res) {
    const Aux = await Deliver.findAll();

var data={
    template:{"shortid":"Skez9bunmL"},
    data:{"Delivers": Aux}
}
var options = {
    uri: "http://localhost:5488/api/report",
    method:"POST",
    json:data
}
request(options).pipe(res);

}