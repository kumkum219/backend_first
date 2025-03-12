require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "kumkum219",
    "id": 112603389,
    "node_id": "U_kgDOBrYw_Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/112603389?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kumkum219",
    "html_url": "https://github.com/kumkum219",
    "followers_url": "https://api.github.com/users/kumkum219/followers",
    "following_url": "https://api.github.com/users/kumkum219/following{/other_user}",
    "gists_url": "https://api.github.com/users/kumkum219/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kumkum219/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kumkum219/subscriptions",
    "organizations_url": "https://api.github.com/users/kumkum219/orgs",
    "repos_url": "https://api.github.com/users/kumkum219/repos",
    "events_url": "https://api.github.com/users/kumkum219/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kumkum219/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Kumkum Surjaye",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-09-01T04:02:10Z",
    "updated_at": "2025-03-11T17:26:32Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send('mypagedotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at mypage</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)

})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})