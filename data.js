const generator = require('generate-password');
const fs = require('fs');
const path = require('path');

// Generate multiple passwords
const passwords = generator.generateMultiple(10, {
    length: 50,
    uppercase: true,
    symbols: true,
    numbers: true,
});

console.log(passwords);

const data = `hello world home yome willi`;
const dirPath = path.join(__dirname, 'real');
const filePath = path.join(dirPath, 'index.js');

// Check if the directory exists
if (fs.existsSync(dirPath)) {
    console.log('Directory already exists');

    // Write to the file if the directory exists
    fs.writeFile(path.join(dirPath, 'roheem.js'), data, function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log('File roheem.js created');
    });

} else {
    // Create the directory if it does not exist
    fs.mkdir(dirPath, function (error) {
        if (error) {
            console.log(error);
            return;
        }

        console.log('Directory created');

        // Write to the file within the newly created directory
        fs.writeFile(filePath, data, function (error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log('File index.js created successfully');
        });
    });
}

// Read from the file
fs.readFile(filePath, 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('File content:', data);
    }
});


fs.unlink(filePath, function (error) {
    if (error) {
       
            console.log('File roheem.js does not exist');
        } else {
            console.log('Error deleting file:', error);
        }
        
    });
  

