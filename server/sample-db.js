const Product = require('./model/product')
class SampleDb {
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula,',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula,',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula,',
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        // Productのドキュメントデータを全て削除する
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                // インスタンス化
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

// SampleDbをエクスポート
module.exports = SampleDb