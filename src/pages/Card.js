import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {startFetchCart} from "@/store/action-creates";
import styles from '../styles/Card.module.css';
import {dataCard} from "@/store/select";
import axios from "axios";
import Payment from "@/Componets/Payment/Payment";

const Card = () => {
    const dispatch = useDispatch();
    const state = useSelector(dataCard);
    useEffect(() => {
        dispatch(startFetchCart())
    }, [dispatch]);
    const downClick = useCallback((id) => {
        axios.put('http://localhost:5000/quantityDown', {id})
            .then(() => {
                dispatch(startFetchCart())
            })
    }, [state])
    const upClick = useCallback((id) => {
        axios.put('http://localhost:5000/quantityUp', {id})
            .then(() => {
                dispatch(startFetchCart())
            })
    }, [state]);

    return (
        <section className={styles.card_block}>
            <div className={styles.cart_container}>
                {
                    state !== null &&
                    state.map((elem) => {
                        return <div key={elem.id} className={styles.cart_item}>
                            <figure>
                                <img src={'http://localhost:5000/' + elem.photo} alt={elem.name}/>
                            </figure>
                            <div>
                                <h3>{elem.name}</h3>
                                <p>{elem.price * elem.quantity}$</p>
                            </div>
                            <div>
                                <button onClick={() => downClick(elem.id)}>Down</button>
                                <span>{elem.quantity}</span>
                                <button onClick={() => upClick(elem.id)}>Up</button>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                    state !== null &&
                    <div className={styles.payment_block}>
                        <Payment/>
                        </div>

                        }
        </section>
);
};

export default Card;