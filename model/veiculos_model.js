const knex = require('knex');
const knexConfigs = require('../knexfile');
const db = knex(knexConfigs.development);

const TABLE_NAME = 'veiculos';


module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
            .where('ativo',true)
    },
    getAll() {
        return db(TABLE_NAME).select('*')
    },
    insert(veiculo) {
        return db(TABLE_NAME).insert(veiculo);
    },
    delete(id) {
        return db(TABLE_NAME)
            .where('id', id)
            .update({
                ativo: false
            });
    },
    atualiza(veiculo, id) {
        delete veiculo.renavam;
        delete veiculo.id;

        return db(TABLE_NAME)
            .where('id', id)
            .update(veiculo);
    },
    findById(id){
        return db(TABLE_NAME).select('*')
            .where('id', id)
            .where('ativo',true)

    },
    findByRenavam(renavam){
        return db(TABLE_NAME).select('*')
            .where('renavam', renavam)
            .where('ativo',true)
    },
}