let http = require('http');
const url = require('url');


function showSection(sectionId) {
    const sections = ['home', 'gallery', 'orders'];
    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function navigateToPage() {
    const path = window.location.pathname;
    if (path === '/' || path === '/all.html') {
        showSection('home');
    } else if (path === '/gallery') {
        showSection('gallery');
    } else if (path === '/orders') {
        showSection('orders');
    } else {
        // Handle 404 or other routes as needed
        showSection('home');
    }
}

window.addEventListener('popstate', navigateToPage);

navigateToPage();


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (req.url === '/') {
        res.write('node.js homework');
        res.end();
    }

    else if (req.url === '/getUserList') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }

    else if (parsedUrl.pathname === '/getUser') {
        const id = parsedUrl.query.userId;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(getUserById(id)));
    }

    else if (parsedUrl.pathname === '/updateUser') {
        const id = parsedUrl.query.userId;
        const name = parsedUrl.query.firstName || null;
        const last = parsedUrl.query.lastName || null;
        const status = parsedUrl.query.status || null;

        updateUser(id, name, last, status);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(getUserById(id)));
    }

    else if (parsedUrl.pathname === '/deleteUser') {
        const id = parsedUrl.query.userId;
        deleteUser(id);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`User '${id}' was deleted`);
    }

    else if (parsedUrl.pathname === '/createUser') {
        createUser();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`New user created`);
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }

});

server.listen(203, () => { console.log('Server is listening on port 203'); });
server.on('connection', (socket) => { console.log('New connection'); });

function getUserList() {
    fs.readFile('mock.json', 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading the file: ${err}`);
            return;
        }
        users = JSON.parse(data);
    });
}

function getUserById(userId) {
    return users.find(user => user.userId === userId);
}

function updateUser(userId, firstName, lastName, status) {
    let user = getUserById(userId);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (status) {
        user.status = status;
    }

    // update the json file
    fs.readFile('mock.json', 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading the file: ${err}`);
        }
        else {
            const existingData = JSON.parse(data);
            const updatedData = existingData.map(existingUser => {
                if (existingUser.UserId === userId) {
                    return user;
                }
                return existingUser;
            });

            fs.writeFile('mock.json', JSON.stringify(updatedData), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error(`Error writing the file: ${writeErr}`);
                }
                else {
                    console.log(`${userId} updated successfully.`);
                }
            });
        }
    });
}

function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.userId === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);

        users.forEach(user => {
            if (user.friends.includes(userId)) {
                user.friends = user.friends.filter(friendId => friendId !== userId);
            }
        });

        fs.writeFile('mock.json', JSON.stringify(users), 'utf8', (err) => {
            if (err) {
                console.error(`Error writing the file: ${err}`);
                return;
            }
            console.log(`User ${userId} was deleted.`);
        });
    }
    else {
        console.log(`User ${userId} not found.`);
    }
}

function generateNewUser() {
    const names = ["Emilia", "Alexander", "Sophia", "Benjamin",
        "Olivia", "Evan", "Liam", "Ava", "Noah", "Isabella", "William"];
    const lastNames = ["Lee", "Johnson", "Harris", "Taylor", "Carter",
        "Anderson", "Miller", "Parker", "Gonzalez", "Robinson"];
    const statuses = ["Online", "Offline"];

    const first = names[Math.floor(Math.random() * names.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    return {
        userId: `user${users.length + 1}`,
        firstName: first,
        lastName: last,
        status: status,
        friends: []
    };
}

function createUser() {
    const newUser = generateNewUser();

    users.push(newUser);

    fs.writeFile('mock.json', JSON.stringify(users), 'utf8', (err) => {
        if (err) {
            console.error(`Error writing the file: ${err}`);
        } else {
            console.log(`New user created successfully.`);
        }
    });
}