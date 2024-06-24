//types of modules
//custom modules
//in-built modules

//third party package/modules
const fs = require('fs'); //fs - file system
const path = require('path'); //path - path

//
const data = 'Hello World!';

//console.log(path.join(__dirname, '/sample'));
const dirAlreadyExist = fs.existsSync(path.join(__dirname, '/sample')); //false / true
if (dirAlreadyExist) {
    console.log('sample dir already exist');
    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(path.join(__dirname, '/sample', '/index.js'), data, function (error) {
        if (error) {
            console.log(error);
            return;
        }

        console.log('file created successfully')
    });
} else {
    console.log('sample dir does not exist');
    //mkdir - make/create directory
    fs.mkdir(path.join(__dirname, '/sample'), function (error) {
        if (error) {
            console.log(error);
            return; //stop the code from running
        }

        console.log('directory created successfully!');
        fs.writeFile(path.join(__dirname, '/sample', '/index.js'), data, function (error) {
            if (error) {
                console.log(error);
                return;
            }

            console.log('file created successfully')
        });
    });
}
//types of modules
//custom modules
//in-built modules

//third party package/modules
const fs = require('fs'); //fs - file system
const path = require('path'); //path - path

//
const data = 'Hello World!';

//console.log(path.join(__dirname, '/sample'));
const dirAlreadyExist = fs.existsSync(path.join(__dirname, '/sample')); //false / true
if (dirAlreadyExist) {
    console.log('sample dir already exist');
    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(path.join(__dirname, '/sample', '/index.js'), data, function (error) {
        if (error) {
            console.log(error);
            return;
        }

        console.log('file created successfully')
    });
} else {
    console.log('sample dir does not exist');
    //mkdir - make/create directory
    fs.mkdir(path.join(__dirname, '/sample'), function (error) {
        if (error) {
            console.log(error);
            return; //stop the code from running
        }

        console.log('directory created successfully!');
        fs.writeFile(path.join(__dirname, '/sample', '/index.js'), data, function (error) {
            if (error) {
                console.log(error);
                return;
            }

            console.log('file created successfully')
        });
    });
}