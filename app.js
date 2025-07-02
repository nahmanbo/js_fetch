function getUser(userId)
{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`User's name: ${data.name}`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}


function getPost(postId)
{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`Post title: ${data.title}`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}


function getUserEmail(userId)
{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`User's email: ${data.email}`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}


function listUserTodos(userId)
{
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
        console.log(`User ${userId} has ${data.length} todos`)
    })
    .catch(err => console.log(`Error: ${err.message}`))
}


function checkPostExists(postId)
{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
        if(data.id)
            console.log("post exsist")
        else
        console.log("post not exsist")
    })
    .catch(err => console.log(`Error: ${err.message}`))
}

function fetchWithDelay(url, delay) {
    setTimeout(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const str = JSON.stringify(data);
                console.log(`First 50 chars: ${str.slice(0, 50)}...`);
            })
            .catch(err => console.log(`Error: ${err.message}`));
    }, delay);
}



const task1 = getUser;
const task2 = getPost;
const task3 = getUserEmail;
const task4 = listUserTodos;
const task5 = checkPostExists;
const task6 = fetchWithDelay;

task1(3)
.then(()=>task2(3))
.then(()=>task3(3))
.then(()=>task4(3))
.then(()=>task5(3))
.then(()=>task6('https://jsonplaceholder.typicode.com/posts/1', 2000))






