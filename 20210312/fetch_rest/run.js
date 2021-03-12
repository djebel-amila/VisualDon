const R = require('ramda')
const fetch = require('node-fetch')

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'



// une fonction get pour recupérer le json
const getJson = url => fetch(url).then(r => r.json());

// une fonction get pour recupérer le json
const reducer = (r, d) => {
    const userId = d.userId;
    const prev = r[userId] || []
    return {
        ...r, 
        [userId]: [...prev, d.title]
    }
}

const maFonction = async () => {
    const users = await getJson(URL_USERS)
    const posts = await getJson(URL_POSTS)
//    console.log(users)
//    console.log(posts)

    const parUser = posts.reduce(reducer, {})

    console.log(
            users.map(d => (
                {
                nom_utilisateur: d.username, 
                ville: d.address.city,
                nom_companie: d.company.name,
                titre_posts: parUser[d.id]
                }
            )
        )
    )
}

maFonction();