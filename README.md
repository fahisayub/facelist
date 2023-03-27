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

As the user visit the website, user will be redirected to login page and on user enters login credentials {usename:foo, password:bar} user will be redirected back to home page where the user  can view the contact list, as the user scroll down to the end the loading card will be visible and a second later other 10 more contacts will be loaded to the page,this will continue as the user scroll down. On the to right corner of the navbar, logout button will be visible which is not visible if the user is not logged in. On Logout user will be redirected to login page again.

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

- <https://chakra-ui.com/>
- <https://www.typescriptlang.org/>
- <https://create-react-app.dev/docs/getting-started/>
- <https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test>
- <https://developer.mozilla.org/en-US/>
