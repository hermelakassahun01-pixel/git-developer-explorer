# GitHub Developer Explorer
github-developer-explorer/
├── index.html
├── style.css
├── README.md
└── js/
    ├── app.js
    ├── githubApi.js
    ├── analytics.js
    └── ui.js
## Project Description

GitHub Developer Explorer is a Vanilla JavaScript application that uses the GitHub REST API to search for a GitHub username and display useful information about the developer and their public repositories.

The project focuses on asynchronous JavaScript using `fetch()`, `async/await`, `Promise.all()`, error handling, and JavaScript array methods.

## Features

* Search for a GitHub user by username
* Display GitHub profile information
* Display profile avatar, name, bio, location, followers, and following
* Display public repository count
* Calculate total stars and forks
* Find the most-starred repository
* Display the five most-starred repositories
* Find the most frequently used programming language
* Display distinct programming languages
* Handle invalid usernames and API errors

## API Endpoints

### Get GitHub User

```text
https://api.github.com/users/{username}
```

### Get User Repositories

```text
https://api.github.com/users/{username}/repos?per_page=100&sort=updated
```

## Technologies

* HTML
* CSS
* Vanilla JavaScript
* GitHub REST API
* Fetch API
* ES Modules

## JavaScript Concepts Used

* `fetch()`
* Promises
* `async/await`
* `Promise.all()`
* `try...catch`
* `throw new Error()`
* `response.ok`
* `response.json()`
* `map()`
* `filter()`
* `reduce()`
* `find()`
* `sort()`
* `Set`
* Destructuring
* Optional chaining
* Nullish coalescing
* Template literals
* ES module `import` and `export`

## Project Structure

```text
github-developer-explorer/
│
├── index.html
├── style.css
├── README.md
│
└── js/
    ├── app.js
    ├── githubApi.js
    ├── analytics.js
    └── ui.js
```

### File Responsibilities

* `index.html` — Application structure and search form
* `style.css` — Simple page styling
* `githubApi.js` — GitHub API requests
* `analytics.js` — Repository statistics and analysis
* `ui.js` — Display loading, errors, and results
* `app.js` — Main application flow and event handling

## How to Run

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Open `index.html` using a local web server.
4. Enter a GitHub username.
5. Click **Search**.
6. The application fetches the user's profile and repositories and displays the results.

## Example

Try searching for:

```text
octocat
```

## Author

**Name:** Your Name
**Student ID:** Your Student ID
