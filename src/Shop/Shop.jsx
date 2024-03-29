import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const Shop = ({shop,hendelBuyNow}) => {
    let {id,name,coverImg,description,price,buyButton} = shop
    return (
        <div className="w-[95%] md:w-[80%] mx-auto mb-9 grrid">
           <div className="card bg-base-100 shadow-xl h-[500px]">
   <figure><img src={coverImg} alt="" /></figure>
  <div className="card-body">
    <h2 className=" text-[22px] font-bold">{name}</h2>
    <p className="text-[500] text-gray-500">{description}</p>
    <div className="flex space-x-1 text-orange-400 text-[18px]">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfAlt />
    </div>
    <p className="font-bold text-[20px]">{price} <span className="text-red-600">$</span></p>
    <div className="flex justify-center">
      <button className="btn btn-primary" onClick={()=>hendelBuyNow(shop,id)}>{buyButton}</button>
    </div>
    </div>
   </div>
 </div>
    );
};

Shop.propTypes ={
    shop:PropTypes.object.isRequired,
    hendelBuyNow : PropTypes.func.isRequired
}
export default Shop;