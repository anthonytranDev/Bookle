const {dialog} = require('electron').remote

function openFile(moveAndExtract, bookGenerate){
    console.log(dialog);
    dialog.showOpenDialog(function(filePaths){
        console.log(filePaths[0]);
        moveAndExtract(filePaths[0]).then(function(){
            bookGenerate();
        })
    });
}

module.exports = openFile;