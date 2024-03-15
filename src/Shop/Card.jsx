
import PropTypes from 'prop-types';

const Card = ({buy,hendleDelete}) => {
    return (
        <div className="md:w-[80%] mx-auto bg-[#1111110D] mb-9 p-3 md:p-12 rounded-xl shadow-xl">
           <h1 className="text-center text-[22px] font-bold text-gray-800">Cards : {buy.length}</h1>
          
           
           {buy.map((buy,index)=> 
               <div key={index} className="md:w-[70%] mx-auto flex justify-between items-center bg-white rounded-xl p-5 mt-3 font-semibold text-gray-600">
                <p>{index + 1}</p>
               <h1>{buy.name}</h1>
               <h2>{buy.price} <span className="text-red-500">$ </span></h2>
               <button onClick={() =>hendleDelete(buy)} className='btn'>Delete</button>
            </div>)}
        </div>
    );
};


Card.propTypes ={
    buy: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    hendleDelete: PropTypes.func.isRequired
}

export default Card;
