const R = require('ramda')
const fetch = require('node-fetch')

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'


const fetchUsers = async () => {

const users = fetch(URL_USERS)
    .then(response => response.json())
    .then(json => console.log(json))

const posts = posts = fetch(URL_POSTS)
    .then(response => response.json())
    .then(json => console.log(json))

    
}

fetchUsers()

/* 
filter 
usernames
ville
company.name 
titres_posts

*/


