import React, { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
// import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm"


const PUBLIC_KEY = "pk_test_51LNkyJFGyqtGlrO1bntRQgEes1YMTphf5qJEVJUcilwscukUrQa3HIhHtFu5dwOOus2UdsjKGRYRjcCahUPdnDDm00254IeMVb"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = ({ total }) => {
    // console.log(parseInt(total))
    const [clientSecret, setClientSecret] = useState("")
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total: 1000 }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, []);

    const appearance = {
        theme: "stripe",
    
        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            spacingUnit: '2px',
            borderRadius: '4px',
            // See all possible variables below
        }
    };

    const options = {
        clientSecret,
        appearance,
    }
    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripeTestPromise}>
                    <CheckoutForm />
                </Elements>
            )}
            
        </>
    )
}


export default StripeContainer;