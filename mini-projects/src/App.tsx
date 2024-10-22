import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";
import Subscribe from "./components/SubscribeCard";
import productImg from './assets/headphone.png';


export default function App() {
    return (
        <>
            <ProductModalScreen />
        </>
    );
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
        <main className='w-full h-screen bg-gray-200 flex items-center justify-center'>
            <ProductModal img={productImg} name="Razer Kraken Kitty Edt Gaming Headset Quartz" price={799} priceWithDiscount={599} stock={50} />
        </main>
    );
};
