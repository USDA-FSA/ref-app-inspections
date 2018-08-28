//
//
//
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pagesData = require('./data/pages');

function addPages( plugins ){

    var pArr = pagesData.pages;

    for (var i = 0; i <  pArr.length; i++ ){
      var p = pArr[i];
      plugins.push(
        new HTMLWebpackPlugin({
          title: p.title,
          template: p.template,
          filename: path.join(__dirname, p.filePath),
          inject: p.inject
        })
      );
      p = null;
      p = undefined;
    }

    pArr = null;
    pArray = undefined;

    return plugins;
}

module.exports = {
  AddPages: addPages
}