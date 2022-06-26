const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        products : [
            {
                productId: { type: String, required: true},
                quantity: { type: Number, default: 1, required: true },
            },
        ],
        summery : {
            total:{ type: Number, required: true },
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("example",ExampleSchema);