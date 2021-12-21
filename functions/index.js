const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IG0eGIJRVu5i86EuSRAIKuQXXaW9GTUhVtF8nBNaZs50SCTXz9ZihY8pyNBWAAvSbnXM0rn24HqJzvcN9xuU8h100m86n8z04"
);
// API
// -App config
const app = express();
// -Middlewares
// app.use((req, res, next) => {
//   // res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(cors({ origin: true }));
app.use(express.json());
// -API routes
app.get("/", (request, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment req recived: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/e-clone-f6650/us-central1/api
