import React, {useCallback, useReducer} from 'react';
import {useSelector} from "react-redux";
import {dataDescription} from "@/store/select";
import styles from '../../styles/Description.module.css'
import axios from "axios";
import {useRouter} from "next/router";


const AsideRightContexts = ({setImagesSlider}) => {
    const state = useSelector(dataDescription);
    const router = useRouter()
    const editAsideLeftIgeValue = useCallback((src) => {
        setImagesSlider('http://localhost:5000/' + src)
    }, [state]);
    const addTotalCart = useCallback((id)=>{
       axios.post('http://localhost:5000/moveToCart',{id})
           .then(()=>{
               router.push('/Card')
           })
    },[state])
    return (
        <aside className={styles.aside_right}>
            {
                state && <div>
                    <h1>{state.name}</h1>
                    <p>{state.description}</p>
                    <div className={styles.slider_block}>
                        {
                            state.images.map((item, index) => {
                                return <div key={index} onClick={() => editAsideLeftIgeValue(item)}>
                                    <figure>
                                        <img src={'http://localhost:5000/' + item} alt=""/>
                                    </figure>
                                </div>
                            })
                        }
                    </div>
                    <span>Price:<small>{state.price}$</small></span>
                    <button onClick={()=> addTotalCart(state.id)}>Add to Cart</button>
                </div>
            }
        </aside>
    );
};

export default AsideRightContexts;