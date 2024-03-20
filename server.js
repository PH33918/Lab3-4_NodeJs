// import express from 'express';
// import router from './router/product.js';
// import connectdb from './database/connect.js';
// import Authrouter from './router/auth.js';
// const app = express();
// const port = 3000;
// app.use(express.json())
// app.use('/api',router);
// app.use('/api',Authrouter);
// app.listen(port,async ()=>{
//     await connectdb();
//     console.log(`Endpoint http://localhost:${port}/api/products`);
// })

import connectdb from "./Lab3+4/database/connect.js";
import Authrouter from "./Lab3+4/router/auth.js";
import router from "./Lab3+4/router/book.js";
import middleware from "./Lab3-4/middleware/book.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", router);
app.use("/api", Authrouter);
app.listen(port, async () => {
  await connectdb();
  console.log(`Endpoint http://localhost:${port}/api/books`);
});
