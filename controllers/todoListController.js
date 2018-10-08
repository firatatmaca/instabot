'use strict';

exports.list_all_tasks = function(req, res) {
    res.send({ helloZfuTech: 'list_all_tasks' });
};

exports.create_a_task = function(req, res) {
    res.send({ helloZfuTech: 'create_a_task' });
};

exports.read_a_task = function(req, res) {
    res.send({ helloZfuTech: 'read_a_task' });
};

exports.update_a_task = function(req, res) {
    res.send({ helloZfuTech: 'update_a_task' });
};

exports.delete_a_task = function(req, res) {
    res.send({ helloZfuTech: 'delete_a_task' });
};
