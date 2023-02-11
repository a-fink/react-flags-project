# Flags of the World

![Light and dark mode front page image](/readme-images/combined-image.png "Project Image")

## Live Site

[Live Site](https://flagsoftheworld-afink.netlify.app)

## Goals
- To cement my knowledge of React including functional components and hooks
- To explore the use of React Router for front end routing and single-page functionality

## Features
Users can:
- See all countries from the [REST Countries API](https://restcountries.com) on the homepage
- Filter countries by region
- Search for countries by name
- Click on a country to see detailed information and links to all bordering countries
- Toggle the color scheme between light and dark modes

## Technologies Used
- React - page framework and all components
- React Router - browser routing for single-page functionality
- Create React App - library used for project setup with a customized template
- HTML5 - as JSX within React
- CSS - styling and media breakpoints for responsive design
- JavaScript / ES6 - importing / exporting, fetching from API, conditional logic / mapping within React elements
- Google Fonts - custom fonts library
- Ionicons - open-source icon library
- Postman - testing API endpoints and exploring response data structures
- Git / GitHub - version control
- Netlify - hosting with continuous deployment from GitHub

## Recently Completed Improvements
- Light mode / dark mode choice is now stored in session storage so it persists through page refresh / redirect

## Planned Future Improvements
- Further split out container components from presentational components
- Add additional filtering options (sub-region)
- Make filtering menu hide when clicking elsewhere on the page, and have filter options indicate if they are active
- Add additional search options (capital, language, country code, etc.)
- Add search functionality to the single country view
- Add loading placeholder for border countries in single country view
- Store last search parameters used on main page so when back button is clicked the same results display
- Test page accessibility and add additional features for a more accessible design
- Add additional styling to indicate that search results on the home page are clickable on mobile
- Explore additional styling libraries such as Bootstrap, Sass, or Tailwind

### Acknowledgements
This project is a solution to the [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge on Frontend Mentor.
