Let's try to create a competitor for Trello!

1. Create an Express application, the application should operate with the following resources:
    - User with attributes(at least) : `id`, `name`, `email`;
    - Board (set of lists): `id`, `title`
    - List (set of tasks): `id`, `title`, `order`
    - Task: `id`, `title`, `order`, `description`, `assignee` (user`s id)

2. For each entity should be created REST endpoints

3. For now, this endpoints should operate only with in-memory (hardcoded) data, in the next tasks we will use a DB for it. You may organize your modules with the consideration that the data source will be changed soon.
`appplication/json` format
4. An  should be used for request and response body.

5. Do not put everything in one file - use a separate file for application creation (bootstrapping), for controllers (routers) and code related to business logic. Also split files to different modules depends on a domain (user-related, board-related, etc...).
