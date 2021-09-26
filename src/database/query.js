export const queries = {
  getProducts: "SELECT * FROM products",
  newProduct:
    "INSERT INTO products (state, holder, weight, price, priceUnit, createBy, address, createAt, updateAt) VALUES (@state, @holder, @weight, @price, @priceUnit, @createBy, @address, GETDATE(), GETDATE())",
  getProductById: "SELECT * FROM products WHERE consecutive = @id",
  deleteProductById: "DELETE FROM products WHERE consecutive = @id",
  updateProductById:
    "UPDATE products SET state = @state, holder = @holder, weight = @weight, price = @price, priceUnit = @priceUnit, updateBy = @updateBy, address = @address, updateAt = GETDATE() WHERE consecutive = @id",
};
