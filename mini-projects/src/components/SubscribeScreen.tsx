import img from '../assets/subscribe-image.jpg';

export default function Subscribe() {
    return (
        <main className='w-full h-screen bg-gray-700 flex items-center justify-center'>
            <div className="flex flex-col md:flex-row w-80 md:w-[600px] h-50 bg-gray-900 rounded-xl p-3 justify-center items-center">
                <img className='object-fit md:w-48 w-full h-60 rounded-t-xl md:rounded-t-none md:rounded-l-xl hover:scale-105 duration-200' src={img} />
                <div className='flex flex-col gap-4 items-center justify-center text-white text-center md:text-start p-4 md:p-8'>
                    <h1 className='w-full text-xl'>Get diet and fitness tips in your inbox</h1>
                    <p
                        className='leading-5 tracking-wide text-sm'
                    >Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4 pr-4'>
                        <input type="text" placeholder='Enter your email address'
                            className="flex-2 bg-gray-900 border-2 border-zinc-600 w-full p-2 pl-4 rounded placeholder:text-sm placeholder:text-center md:placeholder:text-start focus:outline-none"
                        />
                        <button className="px-4 py-2 rounded-lg bg-green-500 text-black hover:brightness-150">Subscribe</button>
                    </div>
                </div>
            </div>
        </main>);
}