import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    
    const price = localStorage.getItem("price")
    const name = localStorage.getItem('name')
    const itemId = localStorage.getItem('itemId')
    return (
        <div className=" w-full">
            <h2 className="text-3xl mb-10 ml-40 font-bold">You Need <span className="text-orange-500">${price} </span> For  {name} </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm name={name} price={price} itemId={itemId}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;

