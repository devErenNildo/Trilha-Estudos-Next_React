"use client"
import { useRouter } from "next/navigation";

const OrderProduct = () => {

    const router = useRouter();

    const handleClick = () => {
        alert("next");
        router.push("/");
    }

    return(
        <>
            <h1>
                order product page
            </h1>
            <button onClick={handleClick}>place order</button>
        </>
    );
}

export default OrderProduct;