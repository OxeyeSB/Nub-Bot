const { model, Schema } = require("mongoose");
 
let logschema = new Schema({
    Guild: String,
    Channel: String,
    Webhook: String
});
 
module.exports = model("log", logschema);