import quote from '../assets/memorials/bg-pattern-quotation.svg';
import person1 from '../assets/memorials/image-daniel.jpg';
import person2 from '../assets/memorials/image-jonathan.jpg';
import person3 from '../assets/memorials/image-kira.jpg';
import person4 from '../assets/memorials/image-jeanette.jpg';
import person5 from '../assets/memorials/image-patrick.jpg';

export default function Memorials() {
    return <section className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className='text-white grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                memorialsData.map((item, index) => <Memorial key={index} {...item} withQuote={index === 0} />)
            }
        </div>
    </section>;
}

interface MemorialProps {
    name: string;
    title: string;
    description: string;
    detail: string;
    className: string;
    maxLinesClass: string;
    image: string;
    withQuote: boolean;
}

const Memorial = ({ name, title, description, detail, className, image, withQuote, maxLinesClass }: MemorialProps) => {
    return (
        <div className={`relative rounded-xl p-10 space-y-4 z-20 ${className}`}>
            {
                withQuote && <img src={quote} className='absolute right-10 top-3 scale-125 -z-10 md:top-7 md:right-24 md:scale-150' />
            }
            <div className="flex justify-start gap-5">
                <img src={image} className="w-10 h-10 rounded-full ring-2 ring-purple-300" />
                <div className='text-sm'>
                    <h3 className='opacity-90'>{name}</h3>
                    <p className='opacity-50'>{title}</p>
                </div>
            </div>
            <h2 className='text-xl font-semibold'>
                {description}
            </h2>
            <span className={`opacity-50 ${maxLinesClass}`}>
                {detail}
            </span>
        </div>
    );
};


const memorialsData = [
    {
        name: 'Daniel Clifford',
        title: 'Verified graduate',
        description: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth',
        detail: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos eligendi unde maxime, nostrum rem dolor minus sit molestiae, eos dolorum tenetur velit doloremque exercitationem voluptates quaerat consequatur ipsam autem! Animi velit, dicta, odio voluptatibus possimus quisquam consequuntur cumque harum perferendis quam ea illo ut labore nemo, hic delectus soluta ab natus maiores atque quaerat aliquam quos magni! Deleniti voluptatibus mollitia ea pariatur voluptatum quibusdam molestiae alias, minima iure quia ipsam vel exercitationem aliquid veniam similique cumque nesciunt. Illum voluptates numquam quam corporis ipsum. Nemo, dignissimos. Unde culpa corrupti veritatis aliquid nisi maiores dolore fugit, inventore eos? Explicabo, numquam incidunt?"',
        className: 'bg-purple-700 md:col-span-2',
        maxLinesClass: 'line-clamp-5 md:line-clamp-12',
        image: person1,
    },
    {
        name: 'Johnatan Walter',
        title: 'Verified graduate',
        description: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth',
        detail: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos eligendi unde maxime, nostrum rem dolor minus sit molestiae, eos dolorum tenetur velit doloremque exercitationem voluptates quaerat consequatur ipsam autem! Animi velit, dicta, odio voluptatibus possimus quisquam consequuntur cumque harum perferendis quam ea illo ut labore nemo, hic delectus soluta ab natus maiores atque quaerat aliquam quos magni! Deleniti voluptatibus mollitia ea pariatur voluptatum quibusdam molestiae alias, minima iure quia ipsam vel exercitationem aliquid veniam similique cumque nesciunt. Illum voluptates numquam quam corporis ipsum. Nemo, dignissimos. Unde culpa corrupti veritatis aliquid nisi maiores dolore fugit, inventore eos? Explicabo, numquam incidunt?"',
        className: 'bg-gray-600',
        maxLinesClass: 'line-clamp-5 md:line-clamp-6',
        image: person2,
    },
    {
        name: 'Kira Taylor',
        title: 'Verified graduate',
        description: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth',
        detail: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos eligendi unde maxime, nostrum rem dolor minus sit molestiae, eos dolorum tenetur velit doloremque exercitationem voluptates quaerat consequatur ipsam autem! Animi velit, dicta, odio voluptatibus possimus quisquam consequuntur cumque harum perferendis quam ea illo ut labore nemo, hic delectus soluta ab natus maiores atque quaerat aliquam quos magni! Deleniti voluptatibus mollitia ea pariatur voluptatum quibusdam molestiae alias, minima iure quia ipsam vel exercitationem aliquid veniam similique cumque nesciunt. Illum voluptates numquam quam corporis ipsum. Nemo, dignissimos. Unde culpa corrupti veritatis aliquid nisi maiores dolore fugit, inventore eos? Explicabo, numquam incidunt?"',
        className: 'bg-white text-black md:row-span-2',
        maxLinesClass: 'line-clamp-5 md:line-clamp-24',
        image: person3,
    },
    {
        name: 'Jeanette Halton',
        title: 'Verified graduate',
        description: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth',
        detail: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos eligendi unde maxime, nostrum rem dolor minus sit molestiae, eos dolorum tenetur velit doloremque exercitationem voluptates quaerat consequatur ipsam autem! Animi velit, dicta, odio voluptatibus possimus quisquam consequuntur cumque harum perferendis quam ea illo ut labore nemo, hic delectus soluta ab natus maiores atque quaerat aliquam quos magni! Deleniti voluptatibus mollitia ea pariatur voluptatum quibusdam molestiae alias, minima iure quia ipsam vel exercitationem aliquid veniam similique cumque nesciunt. Illum voluptates numquam quam corporis ipsum. Nemo, dignissimos. Unde culpa corrupti veritatis aliquid nisi maiores dolore fugit, inventore eos? Explicabo, numquam incidunt?"',
        className: 'bg-white text-black',
        maxLinesClass: 'line-clamp-5 md:line-clamp-6',
        image: person4,
    },
    {
        name: 'Patrick Abrams',
        title: 'Verified graduate',
        description: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny\'s worth',
        detail: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos eligendi unde maxime, nostrum rem dolor minus sit molestiae, eos dolorum tenetur velit doloremque exercitationem voluptates quaerat consequatur ipsam autem! Animi velit, dicta, odio voluptatibus possimus quisquam consequuntur cumque harum perferendis quam ea illo ut labore nemo, hic delectus soluta ab natus maiores atque quaerat aliquam quos magni! Deleniti voluptatibus mollitia ea pariatur voluptatum quibusdam molestiae alias, minima iure quia ipsam vel exercitationem aliquid veniam similique cumque nesciunt. Illum voluptates numquam quam corporis ipsum. Nemo, dignissimos. Unde culpa corrupti veritatis aliquid nisi maiores dolore fugit, inventore eos? Explicabo, numquam incidunt?"',
        className: 'bg-gray-900 md:col-span-2',
        maxLinesClass: 'line-clamp-5 md:line-clamp-12',
        image: person5,
    },
];
