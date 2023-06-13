import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    
    const price = localStorage.getItem("price")
    const name = localStorage.getItem('name')
    return (
        <div className="border w-full">
            <h2 className="text-3xl">taka: ${price} name: {name}</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm name={name} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;

