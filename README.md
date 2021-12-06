# SQF Full Stack Engineer Exercise
👋 Welcome to the Squadformers Full Stack Engineer Exercise. With this exercise we'll be building a full stack app with JavaScript. Our stack consists of a scaffolded React frontend, and an Express backend. We've designed this exercise
to simply touch both the backend and the frontend. Normally, when developing a full-stack app, you'd make considerations
such as, storage, caching, deployment, content-delivery, etc. For this exercise, your backend will talk to an external
JSON server, but that's about it. So with that said, let's dive right in!

## Setup environment

#### Clone repository
Clone the repository from Github.
```bash
$ git clone git@github.com:squadformers/fsd-exercise.git
```

#### Install dependancies
Install the dependancies for both the server and the client.
```bash
$ npm install && cd client && npm install
```

#### Start application
Start server.
```bash
$ npm start
```
Start client.
```bash
$ cd client
$ npm start
```

At this point you should have the [server running](http://localhost:3001/) and the
[backend running](http://localhost:3000/).


## The task
For the task, we will work on a hypothetical task-list application. You'll modify this repo to create the application.

### Frontend Requirements
- [ ] View all the tasks in your list.
- [ ] Add a new task.
- [ ] Mark a task as complete.
- [ ] Show how many tasks are done.
- [ ] Ability to edit a task name.
- [ ] Ability to delete a task.

* Create components based off the following mockup. 
* Consider this mockup a wireframe. Therefore, you don't need to be pixel perfect. To speed things up, you are welcome 
to use design frameworks and libraries that capture the spirit of the application requirements.

![image](https://i.imgur.com/0bp2sn7.png)

### Backend Requirements
- [ ] Implement all endpoints necessary to support the frontend.
- [ ] Use https://jsonplaceholder.typicode.com/ as the data layer and storage.

* For the backend, normally you'll want to store your data in a database. But to speed things up, your backend can
communicate with the `/todos` API at https://jsonplaceholder.typicode.com/ instead of writing to a database directly.
You may wonder why you couldn't just talk to the JSON API directly from the frontend. Well, you can! But since this
position is a full-stack position, we want to see how you handle working on the backend. 😄


We understand that you may be looking at many different positions and we don't want to take up too much
of your time. 😅 We feel that this exercise should only take about 4 hours to complete and want to thank you in advance
for putting the time into it. If you have any questions, or even recommendations on how we can make this exercise better
please feel free to reach out. Thank you and good luck!
