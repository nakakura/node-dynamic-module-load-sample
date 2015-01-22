/// <reference path="bin/typings/tsd.d.ts"/>
/// <reference path = "bin/ModuleIf.ts"/>

_ = require("lodash");
var fs = require('fs');

fs.readdir('bin/plugins', function(err, files){
    if (err) throw err;
    var fileList = [];

    var filterdList = _.filter(files, (fileName: string)=>{
        return strEndsWith(fileName, ".js");
    });

    _.forEach(filterdList, (fileName)=>{
        var path = "./bin/plugins/" + fileName;
        var modNameSpace = require(path);
        var mod: ModuleIf = new modNameSpace.initialize();
        mod.execute();
    });
});

function strEndsWith(str,suffix) {
    var regex = new RegExp(suffix+'$');
    if (str.match(regex) != null) return true;

    return false;
}

