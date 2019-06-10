
exports.up = function(knex) {

    return knex.schema
        .createTable('veiculos', table => {
            table.increments('id').primary(),
            table.string('placa').notNullable(),
            table.string('chassi').notNullable(),
            table.string('renavam').notNullable(),
            table.string('modelo').notNullable(),
            table.string('marca').notNullable(),
            table.string('ano').notNullable(),
            table.boolean('ativo').defaultTo(true)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('veiculos')
};
