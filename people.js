const fs = require('fs')


const writeFiles = () => {
    const people = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      }
    ]
    fs.writeFile('./data.txt', JSON.stringify(people), 'utf-8', (err) => {
        if (err) console.log('Error Saving Data!');
    });
};

const readFiles = () => {
    fs.readFile('./data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        const parsedData = JSON.parse(data);
        arr = []
        parsedData.forEach(element => {
            arr.push(element.name)
        });
        console.log(arr);
    });
};

const getDetails = (id) => {
    fs.readFile('./data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        const parsedData = JSON.parse(data);
        const details = parsedData.find(person => person.id === id);
        if (details) {
            console.log(details);
        } else {
            console.log(`No details found for ID ${id}`);
        }
    });
}

const addData = (newData) => {
    fs.readFile('./data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        const parsedData = JSON.parse(data);
        parsedData.push(newData);
        fs.writeFile('./data.txt', JSON.stringify(parsedData), 'utf-8', (err) => {
            if (err) console.log('Error Adding Data!');
            else console.log(parsedData)
        });
    });
}

module.exports = { writeFiles, readFiles, getDetails, addData };