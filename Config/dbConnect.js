const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/pharmacy",
{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected sucessfully"))
.catch((err) => console.log(err.message));