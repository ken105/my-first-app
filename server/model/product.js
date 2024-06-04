const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// モデルをスキーマインターフェースを通して定義
const ProductSchema = new Schema({
    //   author: ObjectId,
    coverImage: String,
    name: {type: String, required: true, max :[60, '最大60文字までです']},
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext2: String,
});

// Productモデルをエクスポート
module.exports = mongoose.model('Product', ProductSchema)