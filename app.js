function getUser(useId)
{
    fetch(`https://jsonplaceholder.typicode.com/users/${useId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`User's name: ${data.name}`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}

getUser(7);

function getPost(postId)
{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`Post title: ${data.title}`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}

getPost(3);