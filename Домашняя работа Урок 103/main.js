


const users = [
    {
        name: 'denis',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Toras',
        age: 30,
        isAdmin: true
    },
    {
        name: 'ivan',
        age: 54,
        isAdmin: true
    }
]

let admins = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
        admins++;
    }
}

console.log(admins, users)
