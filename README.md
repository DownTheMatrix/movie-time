# Overview

MovieTime is a website built in React.js using [The Movie Database API](https://www.themoviedb.org/documentation/api).
No external frameworks have been used. The code uses CSS Flexbox to align and center element horizontally inside of their respective containers, and CSS Grid to display them on both the horizontal and the vertical axes. 

![Mobile view screenshot](https://github.com/DownTheMatrix/movie-time/blob/master/Screenshot.png?raw=true)

## How To Run The App

To get started:

+ clone the project or download it as a .zip file
+ open your terminal
+ cd into the project folder
+ install all project dependencies with `npm install`
+ start the development server with `npm start`

### Get the API key

In order to fetch data from the API and display the movies, you need an API key. To get one, follow the steps outlined on the TMDb official website [here](https://developers.themoviedb.org/3/getting-started/introduction).

Once you have your own key, you can either manually insert it into the URL you will send a request to, or create a file and import it into the App.js component. In the current project, I followed the following steps: 

1. I created a separate JavaScript file
2. I declared a variable and stored the API key value as a string into that variable
3. I exported the variable using the syntax `export let apiKey = "<insert your API key here>"`
4. Finally, I exported the said variable into the component where I needed it (specifically, where I fetched the data from the API). In my case, it was the App.js file

#### Todos

+ Further style the UI and make it abide by the Material Design principles
+ Expand the website functionalities, like adding a link which redirects to the movie details and extra info on the TMDb webpage
+ Add pagination
+ Improve the UX when navigating to the movie details view
+ Add breakpoints for medium size screens
+ Responsive typography and secondary font family

##### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

###### License

This app is released under a [MIT](https://opensource.org/licenses/MIT) license.