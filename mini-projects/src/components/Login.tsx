import loginBg from '../assets/login-bg.jpg';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';

export default function Login() {
    return <section className="flex w-96 lg:w-auto lg:max-w-[800px] h-auto bg-white shadow-2xl rounded-3xl">
        <div className="flex-1 flex flex-col p-10 justify-center">
            <h1 className="font-bold text-4xl font-mono">Log In</h1>
            <p className="text-md text-gray-600 font-sans font-light my-6">
                Log in to your account to upload or download pictures, videos or music.
            </p>
            <input
                className='border border-zinc-200 placeholder:font-light px-6 py-4 rounded-md focus:outline-none'
                type="text"
                placeholder='Enter your email address'
            />
            <div className='flex justify-between items-center my-6'>
                <a href='#' className='font-thin text-cyan-700'>Forgot password?</a>
                <button className='min-w-36 bg-cyan-700 text-white px-8 py-4 rounded-md shadow-lg hover:opacity-90 hover:shadow-xl duration-150'>Next</button>
            </div>
            <div className='text-zinc-400 text-sm tracking-tighter border-t py-4 text-center'>Or log in with</div>
            <div className='flex flex-col lg:flex-row justify-between w-full items-center gap-4'>
                <button className='w-full flex justify-center items-center gap-2 px-4 py-2 border rounded'>
                    <img className='w-10 h-10' src={facebook} />
                    <p className='font-thin'>Facebook</p>
                </button>
                <button className='w-full flex justify-center items-center gap-2 px-4 py-2 border rounded'>
                    <img className='w-10 h-10' src={google} />
                    <p className='font-thin'>Google</p>
                </button>
            </div>
        </div>
        <div className="hidden lg:block lg:flex-1">
            <div className='relative'>
                <img className='w-full h-full object-cover rounded-r-2xl' src={loginBg} />
            </div>
        </div>
    </section>;
}
