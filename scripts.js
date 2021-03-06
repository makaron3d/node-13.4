process.stdin.setEncoding('utf-8');

/*
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});

*/


//   node scripts.js


process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/lang':
                process.stdout.write("Let's test language:\n");
                console.log(process.env ['lang']);
                break;
            case '/node':
                process.stdout.write('Node version:\n')
                console.log(process.versions ['node']);
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n'); 
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
        }
    }
});


//var version = process.versions;

//console.log(process.versions ['node']);
//var version = process.versions;


//var nodeVersion = version.node;
//console.log('Node version is: ' + nodeVersion);