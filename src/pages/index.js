import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {productDescriptionItem, startFetchProducts} from "@/store/action-creates";
import {dataProducts} from "@/store/select";
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Link from "next/link";

export default function Home() {
    const [noOfElement, setNoOfElement] = useState(12);
    const state = useSelector(dataProducts)
    const sliceState = state.slice(0, noOfElement)
    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        return () => {
            dispatch(startFetchProducts())
        }
    }, [dispatch]);
    const moreAll = useCallback(() => {
        if (sliceState.length >= noOfElement) {
            setNoOfElement(noOfElement + 12)
        }
    }, [sliceState, noOfElement]);
    const descriptionPage = useCallback((item) => {
        dispatch(productDescriptionItem(item))
    }, [sliceState])
    return (
        <>
        <div className={styles.home}>
            {
                sliceState.map((elem, index) => {
                    return <div key={index} className={styles.item} onClick={() => descriptionPage(elem)}>
                        <Link href={'/Description/' + elem.id}>
                        <figure>
                            <img src={'http://localhost:5000/' + elem.photo} alt=""/>
                        </figure>
                        <h1>{elem.name}</h1>
                        </Link>
                    </div>
                })
            }

        </div>
            {
                state.length >= noOfElement ? <div className={styles.more} onClick={moreAll}></div>:null
            }
        </>
    )

}
