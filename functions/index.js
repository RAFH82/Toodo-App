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

// Users
const {
	loginUser,
	signUpUser,
	uploadProfilePhoto,
	getUserDetail,
} = require("./APIs/users");
const auth = require("./util/auth");

app.get("/user", auth, getUserDetail);

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
