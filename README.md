# DGL 409 Wuikinuxv Learning App
 Web App for DGL 409 that helps users learn Wuikinuxv language

## Setup
Using Vite, I initially set up this app using `npm create vite@latest` then, following initial setup prompts by Vite, ran `npm install` and then finally `npm run dev` to actually get the local dev environment running. When successful I was able to get the enviornment running by either clicking on the link provided, or navigating to `http://localhost:5173/` in the browser

## Running the App
For development, I'm using `npm run dev` <br> For showcasing, you can instead use this [link to the website](https://wuikinuxv-language-app.netlify.app/)

## MVP
As of this stage, the app displays info on the language, just the basics, nothing too advanced as this meant to be beginner friendly and I didn't want to overload a new user (though even this *may* be too much). Audio, word, and meaning. <br>
The list of words is added dynamically, meaning to add a new word all one would need to do is add the proper info to the [words.json](Wuikinuxv%20Learning%20App/src/assets/words.json) file and the app *should* automatically pull from there and add it to the list.

## Revisions and Feature 1
For learning React Router, I'm following [this](https://youtu.be/Ul3y1LXxzdU?si=CCPoIlVNXV_GGbJ8) tutorial by Web Dev Simplified. <br>
I also tried following [this](https://reactrouter.com/en/main/start/tutorial) tutorial from React Router themselves but found it too confusing and not quite what I needed to do.