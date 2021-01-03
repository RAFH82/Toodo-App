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
const auth = require("./util/auth");

// Todos
const {
	getAllTodos,
	postOneTodo,
	deleteTodo,
	editTodo,
} = require("./APIs/todos");

app.get("/todos", auth, getAllTodos);
// app.get("/todo/:todoId", auth, getOneTodo);
app.post("/todo", auth, postOneTodo);
app.delete("/todo/:todoId", auth, deleteTodo);
app.put("/todo/:todoId", auth, editTodo);

exports.api = functions.https.onRequest(app);

// Users
const {
	loginUser,
	signUpUser,
	uploadProfilePhoto,
	updateUserDetails,
	getUserDetail,
} = require("./APIs/users");

app.get("/user", auth, getUserDetail);
app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
app.post("/user", auth, updateUserDetails);
