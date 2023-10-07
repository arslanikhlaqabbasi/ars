import react from 'react';
import { setproduct } from '../redux/actions/productActions';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
const Product=() =>{
    const productslist= useSelector((state)=>state.allProducts.products);
    const renderlist =productslist.map((productslist)=>{
        const {id, title,image, price, catagory} = productslist;

        return(
        <div  className='four wide column' key={id}> 
    <Link to={`/product/${id}`}>

        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>
                    <img src={image} alt={title}/>
                </div>
                <div className='content'>
                    <div className='header'> {title}</div> 
                    <div className='meta price'> ${price}</div> 
                    <div className='meta'> {catagory}</div> 

                </div>
                
            </div>
        </div>      
        </Link>  
    </div>);
    })
    
return <>{renderlist}</>
};

    export default Product;