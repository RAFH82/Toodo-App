// const functions = require("firebase-functions");

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

const functions = require("firebase-functions");
const app = require("express")();
const {
	getAllTodos,
	postOneTodo,
	deleteTodo,
	editTodo,
} = require("./APIs/todos");

app.get("/todos", getAllTodos);
exports.api = functions.https.onRequest(app);

app.post("/todo", postOneTodo);

app.put("/todo/:todoId", editTodo);

app.delete("/todo/:todoId", deleteTodo);
