import fs from 'node:fs/promises'

try {
    const stats = await fs.stat('C:/Users/Lenovo/OneDrive/Documents/NodeJS Practice/BuildIn-Modules/fs/git-cheat-sheet-education.pdf');
    stats.isFile();
    stats.isDirectory();
    stats.isSymbolicLink();
    console.log(stats.size);
} catch(error) {
    console.log("error:", error);
}