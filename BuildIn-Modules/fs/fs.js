import fs from 'node:fs'

fs.stat('C:/Users/Lenovo/OneDrive/Documents/NodeJS Practice/BuildIn-Modules/fs/git-cheat-sheet-education.pdf', (error, stats) => {
    if(error) {
        console.log(error);
    } else {
        console.log("read the file")
    }
    console.log(stats.isFile());
    console.log(stats.size);
    
})