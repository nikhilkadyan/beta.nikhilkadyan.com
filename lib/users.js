export async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export async function getUserData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}
