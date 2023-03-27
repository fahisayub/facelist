# FaceList

An infinite contact list.

## Deploy link

Netlify link: <https://facelist.netlify.app>

## About this project

The Main Objective of this project is to implement infinite scrolling with loading indicatior,also add fake login and the use is only allowed to view the list if he/she is logged in.

## Features

- Fake login
- Private route
- Redirect on login to home page
- Infinite scrolling contact list
- Loading Skeleton indicator
- Logout
- Redirect on logout to login page

## User flow

As the user visits the website, the user will be redirected to the login page. On entering login credentials {usename: foo, password: bar} user will be redirected back to the home page where the user can view the contact list. As the user scrolls down to the end the loading card will be visible and a second later another 10 more contacts will be loaded onto the page. This will continue as the user scrolls down.

In the right corner of the navbar, the logout button will be visible which is not visible if the user is not logged in. On Logout, the user will be redirected to the login page again.

## Toolsets

- Netlify
- VSCode
- Cypress
- GitHub

## Depentencies

- typeScript
- axios
- chakra-ui
- react
- cypress
- react-redux
- react-router-dom
- redux
- redux-thunk

## Author

Muhammed Fahiz

## References

- <https://randomuser.me/documentation#howto>
- <https://chakra-ui.com/>
- <https://www.typescriptlang.org/>
- <https://create-react-app.dev/docs/getting-started/>
- <https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test>
- <https://developer.mozilla.org/en-US/>
