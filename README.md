# Smart LFG

Smart LFG is a web application that enhances and automates the process of finding other video game players.  Instead of creating or scrolling through tons of posts, users simply select a game and how they want to play it.  From there, the application analyzes user-specific information such as personality and interests to quickly form highly compatible groups. In addition, the skill levels of users are calculated from game statistics fetched from various external APIs, which can then be considered when a competitive experience is wanted.

## Current Focus

- Building new user interface with strong emphasis on mobile layouts
- Enhancing matchmaking algorithm with intelligent personality and interest comparisons
- Adding support for more multiplayer games

## Stack

- React.js: Frontend
- Chakra UI: React components and styling
- Express.js: Backend
- Socket.io: Real-time, bi-directional communication
- MongoDB: Permanently storing data
- eslint: Automatically identifying and fixing code errors
- prettier: Enforcing code style

## Development

1. Clone this project to your computer
2. Navigate to this project in your terminal
3. Run `yarn install` to retrieve dependencies
4. Add the following variables to .env.local
```
REACT_APP_BACKEND_URI=
REACT_APP_SOCKET_URI=
```
5. Run `yarn start` to start the application

## Additional Info
- The backend application is private and will most likely remain private
- If you are interested in helping, reach out to me
