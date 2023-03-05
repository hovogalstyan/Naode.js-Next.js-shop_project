import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {AiFillCloseSquare} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {dataProducts} from "@/store/select";
import searchStyles from '../../styles/navSearch.module.css';
import {getSearchValue, startFetchProducts,} from "@/store/action-creates";
import {useRouter} from "next/router";

const NavSearch = () => {
    const router = useRouter()
    const [btnBake, setBtnBake] = useState(false)
    const state = useSelector(dataProducts);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [closIconActive, setClosIconActive] = useState(false);
    const closeModalProductName = useRef(false)
    // search product name  product list
    const productName = useMemo(() => {
        return state.filter((item, index) => {
            return index === state.findIndex(o => item.name === o.name);
        })
    }, [state])
    const filterProductName = useMemo(() => {
        if (productName.length !== 0) {
            return productName.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
        }
    }, [productName, searchText]);
    //end

    //toggle class
    useEffect(() => {
        if (searchText.length >= 2) {
            setClosIconActive(true)
        } else {
            setClosIconActive(false)
        }
    }, [searchText, closIconActive]);
    const toggleInput = useMemo(() => {
        return closIconActive ? searchStyles.input_active : ''
    }, [closIconActive]);
    const closeText = useCallback(() => {
        setSearchText('')
    }, [searchText]);
    const changeSearch = useCallback((e) => {
        setSearchText(e.target.value)
        closeModalProductName.current = false
    }, [searchText]);
    const editInputValue = useCallback((name)=>{
        setSearchText(name)
        closeModalProductName.current = true
    },[filterProductName]);
    const hideForm = useCallback((e) => {
        e.preventDefault()
     if(router.asPath !== '/Card'){
         if(btnBake === false){
             if(searchText !== ''){
                 dispatch(getSearchValue(searchText))
                 setBtnBake(true)
                 closeModalProductName.current = true
             }
         }else {
             setBtnBake(false)
             dispatch(startFetchProducts())
             setSearchText('')
         }
     }else {
         router.push('/')
         setBtnBake(false)
     }

    }, [searchText,btnBake,router]);
    return (
        <div className={searchStyles.search_block}>
            <form className={searchStyles.search_product} onSubmit={hideForm}>
                <div className={`${searchStyles.input_styles} ${toggleInput}`}>
                    <input type="text" value={searchText} onChange={changeSearch} required/>
                    {searchText.length >= 2 && <span onClick={closeText}><AiFillCloseSquare/></span>}
                </div>
                {
                    btnBake === false
                        ? <button>Search</button>
                        : <button>Bake</button>
                }
            </form>
            <div className={searchStyles.list_search_category}>
                {searchText.length >= 1 ?
                    filterProductName &&
                    closeModalProductName.current === false ?
                    filterProductName.map((item) => {
                        return <p key={item.id} onClick={()=>editInputValue(item.name)} className={searchStyles.todo_text}>{item.name}</p>
                    }):null : null
                }
            </div>
        </div>
    );
};

export default NavSearch;