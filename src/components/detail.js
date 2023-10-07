import {react, useEffect }from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import { selectedproduct,removeselectedproduct} from '../redux/actions/productActions';
const Detail=() =>{
    const productslist= useSelector((state)=>state.product);
    const {image, title,price,category,description}=productslist;
    const dispatch = useDispatch();
    const {id} =useParams();
    console.log("id",id);
    const getdata= async ()=> {
        const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {console.log("err",err);});  
        console.log(response);
        dispatch(selectedproduct(response.data));

    };
    useEffect(()=>{
        if(id && id!==""){
        getdata();
        return()=>{
            dispatch(removeselectedproduct());
        }
        }
    },[id]);

    return(<div className='ui grid container'>
        {
            Object.keys(productslist).length===0?(<div>...loding</div>):(<div><div className='ui placeholder segment'>
            <div className='ui twp column stackable center aligned grid'>
                <div className='middle aligned row'> 
                <div className=' lp'>
                    <img className='ui fluid image' src={image} />
                </div>
                <div className=' rp'>
                    <h1>{title}</h1>
                    <h2>
                        <a className='ui tal tag label'>${price}</a>
                    </h2>
                    <h3 className='ui brown block header'>{category}</h3>
                    <p>{description}</p>
                    <div className='ui vertical animated button' tabIndex={0}>
                        <div className='hidden content'>
                            <i className='shop icon'></i>
                        </div>
                        <div className='visible content'>Add to Cart</div>
                    </div>
                </div>

                </div>
            </div>

        </div>
        <div >




           
        </div>
        </div>)
        }
        
    </div>)}
    export default Detail;