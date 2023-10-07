import react, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Product from './Product';
import axios from 'axios'
import { setproduct } from '../redux/actions/productActions';

const List=() =>{
    const productslist= useSelector((state)=>state);
    const dispatch = useDispatch();

    const getdata= async ()=> {
        const response =await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {console.log("err",err);});  
        console.log(response);
        dispatch(setproduct(response.data));

    };
    useEffect(()=>{
        getdata();
    },[]);
    console.log("product",productslist);


   

    return(<div className='ui grid container'>
        
           <Product/>
        
    </div>)}
    export default List;