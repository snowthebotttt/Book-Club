const user = require("./user");
const book = require("./book");
const recommend = require("./recommend");

// Products belongsTo Category
// book.belongsTo(user, {
//   foreignKey: 'book_id',
// });

// recommend.belongsTo(User, {
//   //foreignKey: 'book_id',
// });
// // Categories have many Products
// Category.hasMany(Product, {
//   //foreignKey: 'category_id',
//  onDelete: 'CASCADE',
// });
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   foreignKey: 'product_id',
//   through: ProductTag,
// });
// // Tags belongToMany Products (through ProductTag)

// Tag.belongsToMany(Product, {
//   foreignKey: 'tag_id',
//   through: ProductTag,
// });

// module.exports = {
//   Product,
//   Category,
//   Tag,
//   ProductTag,
// };
