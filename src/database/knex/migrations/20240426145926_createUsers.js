exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id")
  table.text("name")
  table.text("email")
  table.text("password")
  table.text("avatar")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())

  table.enum("role", ["admin", "customer"], {useNative: true, enumName: "roles"}).notNullable().default("customer")

})
exports.down = knex => knex.schema.dropTable("users")