const njDatabase = require('./knexfile')[process.env.node_env || 'development'];
const knex = require('knex')(njDatabase);

function listAllStudents()  {
    return knex('njtable');
}
function getStudentById(id)    {
    return knex('njtable').where('id', id);
}
function createStudent(newStudent)   {
    return knex('njtable').insert(newStudent).returning('*');
}
function deleteStudentById(id) {
    return knex('njtable').where('id', id).delete();
}
module.exports = {
    listAllStudents,
    getStudentById,
    createStudent,
    deleteStudentById
}