import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import bookmark from '../assets/bookmark.svg';

export default function ImageGalery() {
    return (
        <>
            <nav className="w-full flex flex-col md:flex-row gap-2 items-center justify-start md:justify-end md:gap-5 md:mt-10">
                <Link title='Vector' />
                <Link title='Illustrations' />
                <Link title='Images' />
                <Link title='Icons' />
            </nav>
            <div className="md:mt-32">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-10">
                    <div className="w-96 flex justify-between border-b">
                        <input
                            className="w-full py-2 px-4 placeholder:text-zinc-400 placeholder:font-thin focus:outline-none"
                            type="text"
                            placeholder="Search"
                        />
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className="w-8 text-gray-300 duration-200 hover:scale-110"
                            viewBox='0 0 24 24'
                            strokeWidth="1.5"
                            stroke='currentColor'
                            fill="none"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke='none' d="M0 0h24v25H0z" fill="none" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                    </div>
                    <button className="w-40 px-8 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:opacity-70 duration-150">Upload</button>
                </div>
                <ImageGalleryContainer imageInfo={imageInfo} />
            </div>
        </>
    );
}

const Link = ({ title }: { title: string; }) => {
    return (
        <div className="group">
            <div>{title}</div>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100' />
        </div>
    );
};

interface ImageContainerProps {
    imageInfo: ImageProps[];
}

const ImageGalleryContainer = ({ imageInfo }: ImageContainerProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {imageInfo.map(img => <ImageCard {...img} />)}
        </div>
    );
};

interface ImageProps {
    img: string,
    title: string,
    likes: number,
    shares: number,
}

const ImageCard = ({ img, title, likes, shares }: ImageProps) => {
    return (
        <div className='relative group'>
            <img className="w-73 object-fit" src={img} alt="Image" />
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 text-white bg-black bg-opacity-40 duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex justify-between w-full">
                    <div className="font-normal">
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-xs">{likes} likes - {shares} shares</p>
                    </div>
                    <div className="flex-items-center">
                        <img src={bookmark} />
                    </div>
                </div>
            </div>
        </div>
    );
};


const imageInfo = [
    {
        img: image1,
        title: "Abstract Painting 1",
        likes: 245,
        shares: 35,
    },
    {
        img: image2,
        title: "Abstract Painting 2",
        likes: 52,
        shares: 63,
    },
    {
        img: image3,
        title: "Abstract Painting 3",
        likes: 234,
        shares: 96,
    },
    {
        img: image4,
        title: "Abstract Painting 4",
        likes: 1000,
        shares: 120,
    },
    {
        img: image5,
        title: "Abstract Painting 5",
        likes: 453,
        shares: 99,
    },
    {
        img: image6,
        title: "Abstract Painting 6",
        likes: 859,
        shares: 210,
    },
];