
exports.up = function(knex, Promise) {
    return knex.schema.createTable('njtable', (njentity) => {
        njentity.increments('id');
        njentity.string('first');
        njentity.string('last');
        njentity.float('lat', 14, 10);
        njentity.float('long', 14, 10);
        njentity.string('favAnimal')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('njtable');
  
};
