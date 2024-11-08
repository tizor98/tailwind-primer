import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";
import Subscribe from "./components/SubscribeCard";
import productImg from './assets/headphone.png';
import ImageGalery from "./components/ImageGalery";
import Login from "./components/Login";
import Memorials from "./components/Memorials";
import Fylo from "./components/Fylo";


export default function App() {
    return <FyloScreen />;
}

export const SubscribeScreen = () => {
    return (
        <main className='w-full h-screen bg-gray-600 flex items-center justify-center'>
            <Subscribe />
        </main>
    );
};

export const PricingScreen = () => {
    return (
        <main className='w-full h-screen bg-slate-800 flex items-center justify-center'>
            <PricingCard />
        </main>
    );
};

export const ProductModalScreen = () => {
    return (
        <main className='w-full min-h-screen h-full bg-gray-200 flex items-center justify-center'>
            <ProductModal img={productImg} name="Razer Kraken Kitty Edt Gaming Headset Quartz" price={799} priceWithDiscount={599} stock={50} />
        </main>
    );
};

export const ImageGaleryScreen = () => {
    return (
        <main className="w-full h-full min-h-screen bg-cyan-50 flex items-start justify-center">
            <section className="w-11/12 h-auto my-10 p-16 bg-white rounded-3xl shadow-2xl">
                <ImageGalery />
            </section>
        </main>
    );
};

export const LoginScreen = () => {
    return (
        <main className="w-full min-h-screen h-full bg-rose-50 flex items-center justify-center">
            <Login />
        </main>
    );
};

export const MemorialsScreen = () => {
    return (
        <main className="w-full min-h-screen h-full bg-rose-50 flex items-center justify-center">
            <Memorials />
        </main>
    );
};

export const FyloScreen = () => {
    return (
        <main className="w-full min-h-screen h-full bg-white dark:bg-darkBlue0 dark:text-white flex flex-col items-center justify-start">
            <Fylo />
        </main>
    );
};
