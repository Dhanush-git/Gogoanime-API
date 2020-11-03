# Gogoanime-API
This is a personal project that I am working on 🧰
it is a simple api for scrapping 🔪 gogoanime.so 

**How to use the API ?**
<br />

🔢 step 1
```
npm install
```
this should install 🔻 all the dependencies required for running this project 📂

<br />
🔢 step 2

```
npm app.js
```
Now you might get a output similar to this

```
Listening to port 3000
```
🥳 Yay, our API server is running 🏃‍♂️💨


# API Documentation

*Running on localhost*

**GET Popular Anime 🍿**
```
http://127.0.0.1:3000/Popular
```
this will return all the anime on the popular with >name >img_url >anime_id

**GET New Seasons 🆕**
```
http://127.0.0.1:3000/NewSeasons
```


**GET Anime 🕵️‍♂️**
```
http://127.0.0.1:3000/getAnime/"anime_id"
```


**GET Anime Episode 📽**
```
http://127.0.0.1:3000/getEpisode/"episode_id"
```
