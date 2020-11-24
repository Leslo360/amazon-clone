const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HPybRJgEUFeAaPAE1JSemDeudgSQnkSgX65HFpvlbcRfnKcbITwYIWBE6TtlsImszB2u8rSzY08Y4EmOdCMBe3Q00JzU4YxW0')

// Setup API


// - App config
const app = express()


// - Middleware
app.use(cors( { origin: true }))
app.use(express.json())


// - API Routes

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request recieved BOOM!!! for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        
    })

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen Command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/leslo-648dc/us-central1/api