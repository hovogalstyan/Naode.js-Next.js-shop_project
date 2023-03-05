import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {dataDescription} from "@/store/select";
import {useEffect, useMemo, useState} from "react";
import {getIdDescription} from "@/store/action-creates";
import styles from '../../styles/Description.module.css'
import AsideLeftSlider from "@/pages/Description/AsideLeftSlider";
import AsideRightContexts from "@/pages/Description/AsideRightContexts";

export default function Description() {
    const [imagesSlider, setImagesSlider] = useState( null)
    const state = useSelector(dataDescription)
    const otherwise =useMemo(()=>{
        return  state  &&  'http://localhost:5000/' + state.photo
    },[state]);
    const dispatch = useDispatch()
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        dispatch(getIdDescription(id))
    }, [id, dispatch])
    return <section className={styles.description}>
        {
            state &&
            <div className={styles.description_container}>
                <AsideLeftSlider images={imagesSlider} otherwise={otherwise}/>
                <AsideRightContexts setImagesSlider={setImagesSlider}/>
            </div>
        }
    </section>
}