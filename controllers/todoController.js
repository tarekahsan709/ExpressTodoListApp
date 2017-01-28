var bodyparser = require('body-parser');
var urlEncodeParser = bodyparser.urlencoded({ extended: false });
var data = [{ 'item': 'tarek' }, { 'item': 'atik' }, { 'item': 'annona' }];

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlEncodeParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};