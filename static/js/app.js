// data route

// var url = "http://127.0.0.1:5000/api/fetal_data";

// console.log("url",url);

// d3.json(url).then(function(data) {
//     console.log(data);

fetch('/api/fetal_data').then((data)=>{console.log(data)

// variable for x axis(fetal_deaths) fixed
var fetal_deaths = data.fetal_deaths
// variables for all other elements
var state = data.state
var race_eth = data.race_hispanic_origin
var age = data.age
var delivery_place = data.delivery_place
var delivery_method = data.delivery_method    

})







