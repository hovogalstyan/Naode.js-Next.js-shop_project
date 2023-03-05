import React, {useMemo} from 'react';
import styles from '../../styles/Card.module.css'
import {useSelector} from "react-redux";
import {dataCard} from "@/store/select";
const Payment = () => {
    const state = useSelector(dataCard)
    let totalPrice = 0
    const priceQuantity = useMemo(() => {
        if (state !== null) {
            return state.map(item => {
                return item.price * item.quantity
            })
        }
    }, [state])
    if (priceQuantity !== undefined) {
        priceQuantity.map((item) => {
            return totalPrice += item
        })
    }
    return (
         <div className={styles.Card_details}>
             <form className="mb-5">

             </form>

         </div>
    );
};

export default Payment;