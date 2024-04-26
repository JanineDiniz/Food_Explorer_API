exports.up = knex => knex.schema.createTable("plates", table => {
  table.increments("id")
  table.text("title")
  table.text("description")
  table.text("image")
  table.float("price")

  table.enum("category", ["refeicoes", "sobremesas", "bebidas"], {useNative: true, enumName: "categories"}).notNullable()

  table.integer("user_id").references("id").inTable("users")

})

exports.down = knex => knex.schema.dropTable("plates")

