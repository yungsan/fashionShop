const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(process.env.LOCAL_DB);
        console.log('Connected!');
    } catch (error) {
        throw error;
    }

}

module.exports = { connect };