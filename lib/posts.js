export async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export async function getPostData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}
