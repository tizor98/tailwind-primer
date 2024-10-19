import PricingCard from "./components/PricingCard";
import Subscribe from "./components/SubscribeCard";

export default function App() {
    return (
        <>
            <PricingScreen />
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