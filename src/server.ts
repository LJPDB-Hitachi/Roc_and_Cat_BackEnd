import app from "./app";
import * as http from "http";

//const port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
// import * as express from "express";
// import * as socketio from "socket.io";
// import * as path from "path"
// import bodyParser = require("body-parser");
// import* as la_dt_routes from './api/logicapp-bl/data-tagging/routes/la_dataTagging_routes'

// const app = express();
// app.set("port", process.env.PORT || 3000);
// let http = require('http').Server(app)
// let io = require('socket.io')(http)
// app.set('io',io)

// const server = app.listen(app.get("port"), (err) => {
//     if (err) {
//         return console.log(err);
//     }else{
//         console.log(
//             "App is running on http://localhost:%d in %s mode",
//             app.get("port"),
//             app.get("env")
//         )
//     }
// });
// // API Endpoints

// //const routes = require('./api/routes/dataMovement_status_route')(app); //importing route
// //la_dt_routes.Test();//let logicapp_routes = la_dt_routes.Test(); //importing route
// //routes(app); //register the route
// app.get('/', (req: any, res: any) => {
//     res.json({
//         message: 'TS Test...'
//     });
// })


// io.on('connection',(socket)=>{
//   console.log('IO Socket: USER connected...!')
// })


// export default server;
