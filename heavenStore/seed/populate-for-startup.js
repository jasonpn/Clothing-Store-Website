var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
var colour      = require('colour');


//mongoose.connect('mongodb://localhost/shoppingApp');
mongoose.connect('mongodb://localhost/heavenStore', { useNewUrlParser: true, useCreateIndex: true, });

function deleteVariants(callback)
{
    Variant.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting variants from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Variants deleted".red)
            callback()
        }
    });
}
function deleteCategories(callback)
{
    Category.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting category from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Categories deleted".red)
            callback()
        }
    });
}
function deleteDepartments(callback)
{
    Department.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting department from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Departments deleted".red)
            callback()
        }
    });
}

function deleteUsers(callback)
{
    User.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting user from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Users deleted".red)
            callback()
        }
    });
}
function deleteProducts(callback)
{
    Product.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting product from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Products deleted".red)
            callback()
        }
    });
}

function insertCategories(callback)
{
    var categories =
    [
        new Category({
            categoryName        : 'All'
        }),

    ]

    for (let i = 0; i < categories.length; i++){
        categories[i].save(function(e, r) {
            if (i === categories.length - 1){
                console.log("Categories inserted".green)
                callback();
            }
        });
    }
}

function insertDepartments(callback)
{
    var departments =
    [
        new Department({
            departmentName      : 'Clothing',
            categories          : 'All'
        })
    ]

    for (let i = 0; i < departments.length; i++){
        departments[i].save(function(e, r) {
            if (i === departments.length - 1){
                console.log("Departments inserted".green)
                callback();
            }
        });
    }
}

function insertProducts(callback)
{
    var products =
    [
        new Product({
            _id: "5bedf31cc14d7822b39d9d43",
            imagePath: `/uploads/7568644802_1_1_1.jpg`,
            title: 'Black Mid Skirt',
            description: 'Black Mid-Length Skirt.',
            price: 35.95,
            size: 'XS,S,M',
            quantity: 10,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf3b9c14d7822b39d9d45",
            imagePath: `/uploads/5644641800_2_5_1.jpg`,
            title: 'Black Wool Cardigan',
            description: 'Black Wool Cardigan.',
            price: 29.99,
            size: 'XS,S,XL',
            quantity: 15,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf448c14d7822b39d9d47",
            imagePath: `/uploads/7568469251_2_1_1.jpg`,
            title: 'Chessboard Sweater',
            description: 'Pink and black chessboard checkered sweater.',
            price: 25.99,
            size: 'XS',
            quantity: 90,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf55bc14d7822b39d9d4b",
            imagePath: `/uploads/8197757093_2_2_1.jpg`,
            title: 'Green Shirt',
            description: 'Green pattern shirt.',
            price: 79.99,
            size: 'S,M,L',
            quantity: 4,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf5eec14d7822b39d9d4e",
            imagePath: `/uploads/1775300615_1_1_1.jpg`,
            title: 'Blue Flower Shirt',
            description: 'Blue Polyester Flower Shirt.',
            price: 79.99,
            size: 'M,L',
            quantity: 5,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf6b5c14d7822b39d9d51",
            imagePath: `/uploads/6186352407_2_1_1.jpg`,
            title: 'Beige Cardigan',
            description: 'Beige Cotton Cardigan.',
            price: 79.99,
            size: 'M,L',
            quantity: 80,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf720c14d7822b39d9d52",
            imagePath: `/uploads/5575380406_1_1_1.jpg`,
            title: 'Black Flower Shirt',
            description: 'Black Polyester Flower pattern shirt.',
            price: 45.99,
            size: 'XS,S,M',
            quantity: 8,
            department: 'Clothing',
            category: 'All',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d55",
            imagePath: `/uploads/3548350700_2_1_1.jpg`,
            title: 'Black Reversible Jacket',
            description: 'Stylish Black reversible jacket.',
            price: 99.99,
            size: 'XS,M,XL',
            quantity: 12,
            department: 'Clothing',
            category: 'All',
        })
    ];

    for (let i = 0; i < products.length; i++){
        products[i].save(function(e, r) {
            if (i === products.length - 1){
                console.log("Products inserted".green)
                callback();
            }
        });
    }
}

function insertVariants(callback)
{
    var variants =
    [
        new Variant({
            productID: '5bedf31cc14d7822b39d9d43',
            imagePath: `/uploads/7568644710_1_1_1.jpg`,
            color: 'Beige',
            size: 'S,L',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf3b9c14d7822b39d9d45',
            imagePath: `/uploads/5644641735_2_5_1.jpg`,
            color: 'Green',
            size: 'S,L,XL',
            quantity: 12,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469605_2_1_1.jpg`,
            color: 'Blue',
            size: 'XS,M,L',
            quantity: 4,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469822_2_1_1.jpg`,
            color: 'Black',
            size: 'XS,L,XL',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf5eec14d7822b39d9d4e',
            imagePath: `/uploads/1775300806_2_1_1.jpg`,
            color: 'Grey',
            size: 'S,XL',
            quantity: 35,
        }),
        new Variant({
            productID: '5bedf720c14d7822b39d9d52',
            imagePath: `/uploads/5575380407_1_1_1.jpg`,
            color: 'White',
            size: 'M,XL',
            quantity: 5,
        })
    ];

    for (let i = 0; i < variants.length; i++){
        variants[i].save(function(e, r) {
            if (i === variants.length - 1){
                console.log("Variants inserted".green)
                callback();
            }
        });
    }
}

function insertAdmin(callback)
{
    var newUser = new User({
        username    : 'admin@admin.com',
        password    : 'admin',
        fullname    : 'Kanye West',
        admin       : true
    });
    User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });
}


function deleteDBEntitites(callback)
{
    deleteVariants(function()
    {
        deleteCategories(function()
        {
            deleteDepartments(function()
            {
                deleteUsers(function()
                {
                    deleteProducts(function()
                    {
                        insertCategories(function()
                        {
                            insertDepartments(function()
                            {
                                insertProducts(function()
                                {
                                  insertAdmin(callback)

                                })
                            })
                        })
                    });
                })
            })
        })
    })
}



deleteDBEntitites(exit)


function exit() {
    mongoose.disconnect();
}
