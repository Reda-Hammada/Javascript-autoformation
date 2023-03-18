//CommonJS and AMD

//CommonJS 

var module1 = require('module1');
var module2 = require('module2');


function fight() {


}

module1.exports = {
    fight:fight
}


//AMD 

define(['module1','module2'],
    function(moduleImport, module2Import){
        var fight = moduleImport.fight;
        var module2  = module2Import
        function dance(){

        }

        return {
            dance:dance
        }
    })

