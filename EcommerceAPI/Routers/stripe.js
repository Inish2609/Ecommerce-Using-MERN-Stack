// const router = require("express").Router()
// const dotenv = require("dotenv")
// const { default: Stripe } = require("stripe")(process.env.STRIPE_KEY)

// dotenv.config()

// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", async (req,res)=>{
//     await Stripe.paymentIntents.create(
//       {
//         source: req.body.tokenId,
//         amount: req.body.amount,
//         currency: "usd",
//       },
//       (stripeErr, stripeRes) => {
//         if (stripeErr) {
//           res.status(500).json(stripeErr);
//         } else {
//           res.status(200).json(stripeRes);
//         }
//       }
//     );
// })

// module.exports = router

const router = require("express").Router()
const Stripe = require('stripe');
router.post("/payment", async (req,res)=>{
    try {
        const stripe = new Stripe(process.env.STRIPE_KEY)
        const paymentIntent = await stripe.paymentIntents.create({
                    amount: req.body.amount,
                    currency: "usd",
                    automatic_payment_methods: {
                    enabled: true,
                    },
                });
                
        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    }catch(e){
        return res.status(500).json({ error: e.message })
    }
})

module.exports = router