// API endpoint (URL)
const USERS_API = 'https://dummyjson.com/users';

async function fetchUsers() {
    console.log('Entry point: Sending HTTP GET Request')

    try {
        const res = await fetch(USERS_API);
        console.log("Response recieved:",res);
        if(!response.ok){
            console.error(`Error: HTTP Status Code ${response.status} - ${response.statusText}`)
        }

        const data = response.json();

        console.log(data.users.length);
    } catch {
        console.error('\n*** Failed to fetch data ***')
    }

}

fetchUsers();