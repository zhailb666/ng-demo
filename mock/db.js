var users = {};
var backData = {};

var  fs = require('fs');
var  join = require('path').join;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
  let result=[];
  let directoryName = '';
  function finder(path) {
    let files=fs.readdirSync(path);
    files.forEach((val,index) => {
      let fPath=join(path,val);
      let stats=fs.statSync(fPath);
      let splitStr = path.replace('/mock', '');
      if(stats.isDirectory()) {
        console.log('isDirectory', val);
        directoryName = val;
        finder(fPath)
      };
      if(stats.isFile()) {
        try {
          users = require("./"+directoryName+"/"+val);
        } catch (e) {
          return;
        }
        if(typeof users === 'object') {
          backData = Object.assign(backData, users);
        }
      };
    });
  };
  finder(startPath);
  return result;
}
//排除文件，用try catch代替手动排除文件；
function excludeFile(fileName) {
  if(fileName === 'db.js' || fileName === 'readme.text' || fileName === 'route.json') {
    return true;
  }
}

findSync('./mock');

module.exports = function() {
  return backData
};
