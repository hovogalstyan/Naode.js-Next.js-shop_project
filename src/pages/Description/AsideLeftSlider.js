import React from 'react';
import styles from '../../styles/Description.module.css';
const AsideLeftSlider = ({images,otherwise}) => {

    return (
        <aside className={styles.aside_left}>
            <figure>
                <img src={images !== null? images:otherwise } alt={images}/>
            </figure>
        </aside>
    );
};

export default AsideLeftSlider;