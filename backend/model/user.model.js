const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstname : {
            type : String,
        }, 
        
        lastname : {
            type : String,
        }
    },

    {
        timestamps : true
    }
)

const user = mongoose.model('user' , userSchema);
module.exports = {user};