import PropTypes from 'prop-types';

const Card = ({buyNow}) => {
    console.log(buyNow)
    return (
        <div className="md:w-[80%] mx-auto bg-[#1111110D] mb-9 p-12 rounded-xl shadow-xl">
           <h1 className="text-center text-[22px] font-bold text-gray-800">Cards</h1>
           <div className="flex justify-between md:w-[65%] mx-auto text-[16px] font-[500]">
           <h3>Name</h3>   
           <h3>Price</h3>     
           </div>
           <div className="md:w-[70%] mx-auto flex justify-between bg-white rounded-xl p-5 mt-3 font-semibold text-gray-600">
              <h1>kjaoe ciwdansnk</h1>
              <h2>$ 66666</h2>
           </div>
        </div>
    );
};

Card.propTypes ={
    buyNow: PropTypes.array.isRequired
}

export default Card;
