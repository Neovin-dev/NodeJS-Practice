import fs from 'node:fs';

function readConfigFile(filename, callback) {
    fs.readFile(filename, 'utf8', (error, data) => {
        // error as a parameter.
        if(error) {
            if(error.code === 'ENOENT') {
                return callback(new Error(`Config file ${filename} not found`));
            } else if (error.code === "EACCES"){
                return callback(new Error(`No permission to read ${filename}`));
            }
            // we can specify the most common errors and then just return callback error for rest.
            return callback(error);
        }

        try {
            const config = JSON.parse(data);
            callback(null, config);
        } catch (parseError) {
            callback(new Error(`Invalid JSON in ${filename}`))
        }
    })
}

readConfigFile('config.json', (err, config) => {
  if (err) {
    console.error('Failed to read config:', err.message);
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config);
});