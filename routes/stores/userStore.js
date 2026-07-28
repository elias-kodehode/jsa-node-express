const users = [
    { 
        "username":"test",
        "email":"email",
        "id": "efac3ff8-e3c7-4a34-9fb6-873bad336e2a"
    }
];


export function getUserById(id){
    return users.find(x => x.id == id);
}
export function getAllUsers(){
    return users;
}
export function addUser(user) {
    const id = crypto.randomUUID();
    users.push({...user, id: id});

    return id;
}