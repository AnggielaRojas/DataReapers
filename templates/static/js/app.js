// read in data
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

// define variables
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    // Specify database you want to access
    const db = client.db('fetal_database');
    console.log(`MongoDB Connected: ${url}`);
});

// state
// race/hispanic_origin
// age
// delivery place
// delivery method

// heatmap state vs fetal deaths

// apply layout 

// deploy map 

// pie chart race/hispanic origin vs fetal deaths

// apply layout 

// deploy map 

// line graph age of mother vs # of fetal deaths

// apply layout 

// deploy map 

// bar graph delivery place vs # of fetal deaths

// apply layout 

// deploy map 

// lollipop deliver method vs fetal deaths

// apply layout 

// deploy map 
