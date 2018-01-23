"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票', ['IT', '物联网']),
    new Stock(2, '第二只股票', 2.99, 1.5, '这是第二只股票', ['金融']),
    new Stock(3, '第三只股票', 3.99, 3.5, '这是第三只股票', ['IT', '物联网']),
    new Stock(4, '第四只股票', 4.99, 2.5, '这是第四只股票', ['IT']),
    new Stock(5, '第五只股票', 5.99, 4.5, '这是第五只股票', ['IT', '物联网']),
    new Stock(6, '第六只股票', 6.99, 3.0, '这是第六只股票', ['IT', '金融']),
    new Stock(7, '第七只股票', 7.99, 4.0, '这是第七只股票', ['IT', '物联网']),
    new Stock(8, '第八只股票', 8.99, 1.0, '这是第八只股票', ['IT', '互联网'])
];
var app = express();
app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    if (params.nam) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
app.get('/api/stock:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动,地址是http://localhost:8000');
});
//# sourceMappingURL=stock_server.js.map