import weight from '../assets/weight.png';
import heart from '../assets/heart.png';

interface Props {
    name: string;
    img: string;
    price: number;
    priceWithDiscount: number;
    stock: number;
}

export default function ProductModal({ name, img, price, priceWithDiscount, stock }: Props) {
    return <div className="flex flex-col md:flex-row p-4 m-2 bg-white rounded-2xl items-center md:items-start max-w-96 md:max-w-[700px]">
        <img src={img} className=' max-w-48 md:w-auto h-48 object-fit p-4 hover:scale-110 duration-200' />
        <div className="flex flex-col justify-between items-start">
            <div className='bg-black text-white rounded-full px-2 py-1'>Free shipping</div>
            <div className="font-semibold text-3xl mb-8 mt-2">{name}</div>
            <span className="font-semibold line-through">${price}</span>
            <span className="font-bold text-5xl">${priceWithDiscount}</span>
            <span className="text-gray-400 my-4 font-light">The offer is valid until April 3 or as long as stock lasts!</span>
            <div className="w-full h-14 bg-blue-700 rounded-lg border-b-8 border-blue-700 group hover:border-b-0 hover:border-t-8 duration-150">
                <button className="bg-blue-500 text-white px-4 w-full h-full rounded-lg font-semibold text-lg group-hover:bg-blue-700 duration-150">Add to cart</button>
            </div>
            <div className="my-4 tracking-tight group"><div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping inline-block' /> {stock}+ pcs. in stock.</div>
            <div className='w-full grid grid-cols-2 space-x-3'>
                <button className='px-4 py-2 flex justify-center gap-1 items-center border-2 border-zinc-300 rounded-2xl shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                    <img src={weight} className='w-8 h-8' />
                    <p className='text-sm md:text-md font-semibold'>Add to cart</p>
                </button>
                <button className='px-4 py-2 flex justify-center gap-1 items-center border-2 border-zinc-300 rounded-2xl shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                    <img src={heart} className='w-8 h-8' />
                    <p className='text-sm md:text-md font-semibold'>Add to wishlist</p>
                </button>
            </div>
        </div>
    </div>;
}
