const exec = require('child_process').exec;



const child = exec('brew list',
    (error, stdout, stderr) => {
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }

        var cont = document.getElementById('container');

        cont.innerHTML = stdout;
});
