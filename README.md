# Gogoanime-API v.1🧬
This is a personal project that I am working on 🧰
it is a simple api for scrapping 🔪 gogoanime.so 

**How to use the API ?**
<br />

🔢 step 1
```
Download the repo 🟢
```

🔢 step 2
```
npm install
```
this should install 🔻 all the dependencies required for running this project 📂

<br />
🔢 step 3

```
npm start
```
Now you should get a output similar to this

```
Listening to port 3000
```
🥳 Yay, our API server is running 🏃‍♂️💨

🔢 step 4 : Now visit
```
http://127.0.0.1:3000/
```
and you should be greeted with
```
👋 Hello world🌍, Welcome to 🦄 GogoAnime API 🧬
```


# API Documentation 📑

*Running on localhost*

**Available routes**
	
	/Popular/:page_no
	
	/NewSeasons/page_no
	
	/getAnime/anime_id
	
	/getEpisode/episode_id
	
	/search/search_query
	

**GET | Popular Anime 🍿**
```
http://127.0.0.1:3000/Popular/:page
```
 >this will return all the popular anime
```
[
    {
        "name": "anime name",
        "img_url": "url",
        "anime_id": "anime id"
    }
    ...
]
```

**GET | New Seasons 🆕**
```
http://127.0.0.1:3000/NewSeasons/:page
```
 >this will return all anime with new seasons available
```
[
    {
        "name": "anime name",
        "img_url": "url",
        "anime_id": "anime id"
    }
    ...
]
```
**GET | Anime 🕵️‍♂️**
```
http://127.0.0.1:3000/getAnime/:anime_id
```
 >this will return the anime **name** , **thumbnail image** ,**about  ?** and **episode_id** for all the episodes available for that anime
```
[
	{
	    "name": "anime name",
	    "img_url": "url",
	    "about": "Plot Summary: about the anime",
	    "episode_id": 
		    [
		        "some-anime-episode-1",
		        "some-anime-episode-2",
		        "some-anime-episode-3"
		         ...
		    ]
	}
]
```
**GET  | Anime Episode 📽**
```
http://127.0.0.1:3000/getEpisode/:episode_id
```
 >this will return the downloadable  🔻 link for the episode
```
[
	    {
	        "quality": "watch(360P-mp4)",
	        "ep_link": "episode url"
	    }
	    
	    ...
]
```

**GET  | Search Anime 📽**
```
http://127.0.0.1:3000/search/:search-query
```
 >this will return all the anime related to the search
```
[
    	  {
        	"name": "anime name",
        	"img_url": "url",
        	"anime_id": "anime id"
    	  }
	  
	  ...
	  
]	  
```
<br />
<br />

**💢 Troubleshootings**
<br />
This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may not be a good fit for your project(s).

<br />

**❤️ Show your support**
<br />
Please ⭐ this repository if you like it or this project helped you!
Feel free to open issues or submit pull-requests to help me improving my work.

<br />

**🤖 Author**
<br />
Dhanush Suvarna

