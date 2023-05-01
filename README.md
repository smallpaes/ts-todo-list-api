# Todo List API

This is a backend project for a Todo List API built using `express`, `express-validator`, `mysql2`, `typeorm`, and `typescript`. The API provides three RESTful routes for managing tasks.

## Run the server locally

The following instructions will get you a copy of the project and the setting needed to run the back-end server on your local machine.


### Prerequisites

- [npm](https://www.npmjs.com/get-npm)
- [Node.js v18.12.0](https://nodejs.org/en/download/)
- [MySQL Workbench v8.0.16](https://dev.mysql.com/downloads/workbench/)


1. Clone the repository:

```bash
git clone https://github.com/smallpaes/ts-todo-list-api.git
```

2. Enter the project:

```bash
cd ts-todo-list-api
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the database configuration in the `.env` file, which should contain the following variables(or reference to `.env.example` file):

```bash
PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB=
```

5. Start the server:

```bash
npm start
```

Alternatively, you can run the server in development mode with:

```bash
npm run dev
```

5. Find the message for successful activation:

```bash
App is listening on port 3000
```

## Build the project

This project is built using Typescript. To compile it into Javascript, use the following command and the compiled files will be generated in the `dist` folder:

```bash
npm run build
```


## RESTful Routes

### `GET /tasks`

This endpoint returns all tasks from the database.

#### Response

```json
[
  {
    "id": "8e31eb23-8e08-48b9-a2eb-8d0eb780dc3a",
    "title": "Task 2",
    "date": "2023-05-01T12:00:00Z",
    "description": "Description 2",
    "priority": "High",
    "status": "To Do"
  },
]
```

### `POST /tasks`

This endpoint creates a new task in the database.

#### Request

```json
{
  "title": "Task 2",
  "description": "Description 2",
  "date": "2023-05-01T12:00:00Z",
  "status": "Done",
  "priority": "High"
}
```

#### Response

```json
{
  "title": "Task 2",
  "description": "Description 2",
  "date": "2023-05-01T12:00:00Z",
  "status": "To Do",
  "priority": "Done",
  "id": "8e31eb23-8e08-48b9-a2eb-8d0eb780dc3a"
}
```

### `PATCH /tasks/:id`

This endpoint updates the status of a task in the database.

#### Request

```json
{
  "status": "To Do"
}
```

#### Response

```json
{
  "generatedMaps": [],
  "raw": [],
  "affected": 1
}
```
