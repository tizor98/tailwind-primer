export default function PricingCard() {
    return (
        <section className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
            {pricePlans.map(pricePlan => {
                return <PriceDetail {...pricePlan} />;
            })}
        </section>
    );
}


interface Props {
    isMainPrice?: boolean;
    title: string;
    capacity: number;
    capUnit: string;
    monthlyPrice: number;
    descList: string[];
}

function PriceDetail({
    isMainPrice = false,
    title,
    capacity,
    capUnit,
    monthlyPrice,
    descList
}: Props
) {
    return (
        <div className={`text-white border-[8px] border-slate-700 flex flex-col justify-center items-center rounded-2xl h-[500px] w-72 gap-4 ${isMainPrice && 'border-purple-800'}`}>
            <h1 className="uppercase font-semibold mt-10">{title}</h1>
            <h2 className="mt-6 uppercase text-5xl font-serif">{capacity}{capUnit}</h2>
            <p>${monthlyPrice}/month</p>
            <button
                className={`px-4 py-2 border border-purple-800 hover:bg-purple-800 hover:scale-110 duration-200 rounded-lg w-44 ${isMainPrice && "bg-purple-800"}`}
            >Purchase</button>
            <ul className="flex-1 mt-8 border-t border-slate-700 w-full flex flex-col justify-center items-center">
                {descList.map(desc => {
                    return <li className="text-medium">✔️ {desc}</li>;
                })}
            </ul>
        </div>
    );
}


const pricePlans = [
    {
        title: 'Basic',
        capacity: 100,
        capUnit: 'gb',
        monthlyPrice: 1.99,
        descList: [
            '100 GB storage',
            'Option to add members',
            'Extra members benefics'
        ],
    },
    {
        isMainPrice: true,
        title: 'Standard',
        capacity: 200,
        capUnit: 'gb',
        monthlyPrice: 3.99,
        descList: [
            '200 GB storage',
            'Option to add members',
            'Extra members benefics'
        ],
    },
    {
        title: 'Premium',
        capacity: 2,
        capUnit: 'tb',
        monthlyPrice: 8.99,
        descList: [
            '2 TB storage',
            'Option to add members',
            'Extra members benefics'
        ],
    },
];