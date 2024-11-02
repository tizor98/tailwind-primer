import FyloHeader from './FyloHeader';
import heroIllustration from '../assets/fylo/illustration-intro.png';
import featuresAccessAnywhere from '../assets/fylo/icon-access-anywhere.svg';
import featuresSecurity from '../assets/fylo/icon-security.svg';
import featuresCollab from '../assets/fylo/icon-collaboration.svg';
import featuresFolder from '../assets/fylo/icon-any-file.svg';
import productiveIllustration from '../assets/fylo/illustration-stay-productive.png';
import productiveArrow from '../assets/fylo/icon-arrow.svg';
import testimonialQuote from '../assets/fylo/bg-quotes.png';
import testimonialPerson1 from '../assets/fylo/profile-1.jpg';
import testimonialPerson2 from '../assets/fylo/profile-2.jpg';
import testimonialPerson3 from '../assets/fylo/profile-3.jpg';
import FyloFooter from './FyloFooter';

export default function Fylo() {
    return (
        <>
            <FyloHeader />

            <section id='hero'>
                <div className="container mx-auto px-6 text-center md:pt:20 md:pb:52">
                    <img src={heroIllustration} className="mx-auto" />
                    <h1 className='max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl'>
                        All your files in one secure location, assessible anywhere
                    </h1>
                    <p className="max-w-xs mx-auto mb-10 text-sm md:max-w-xl md:text-xl">
                        Fylo stores all your most important files in one secure location. Access them whenever you need, share and colaborate with friends, family, and coworkers.
                    </p>
                    <button className="mx-auto p-3 rounded-full w-52 bg-accentCyan hover:scale-95">Get Started</button>
                </div>
            </section>

            <section id="features" className='pt-12 bg-gray-50 dark:bg-darkBlue1 w-full mt-10'>
                <div className="container mx-auto px-6 pb-32">
                    <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
                        <FeatureItem
                            logo={featuresAccessAnywhere}
                            text='Access your files from anywhere'
                            detail='The ability to use a smartphone, a tablet, or computer to access your account means your files follow you everywhere'
                        />
                        <FeatureItem
                            logo={featuresSecurity}
                            text='Security you can trust'
                            detail='2 factor authentication and user-controlled encryption are just a couple of the security features we have to help secure your files'
                        />
                    </div>
                    <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0 mt-24">
                        <FeatureItem
                            logo={featuresCollab}
                            text='Collab with your team or frieds'
                            detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum nulla consectetur porro nesciunt natus animi quidem quisquam, quam saepe in, id at? Debitis, quisquam ratione quidem voluptatibus aliquid dolorem?'
                        />
                        <FeatureItem
                            logo={featuresFolder}
                            text='We can store any file for you!'
                            detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum nulla consectetur porro nesciunt natus animi quidem quisquam, quam saepe in, id at? Debitis, quisquam ratione quidem voluptatibus aliquid dolorem?'
                        />
                    </div>
                </div>
            </section>

            <section id="productive" className='bg-white dark:bg-darkBlue0 w-full'>
                <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
                    <div className="md:w-1/2">
                        <img src={productiveIllustration} className='mb-10' />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 md:w-1/2">
                        <h4 className="max-w-md text-xl font-bold md:text-4xl">
                            Stay productive, whenever you are
                        </h4>
                        <p className="text-md md:text-lg">
                            Never let location be an issue when accessing your files.
                            Fylo has you cover for all of your file storage needs.
                        </p>
                        <p className="text-md md:text-lg">
                            Securely share files and folders with friends, family and colleagues for live collaboration.
                            No email atttachments required now.
                        </p>
                        <div className="block mt-4">
                            <a href="#" className="border-b border-accentCyan text-accentCyan">
                                See how Fylo works
                                <img src={productiveArrow} className='inline pl-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className='w-full bg-gray-50 dark:bg-darkBlue0'>
                <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
                    <div className="relative flex flex-col w-full gap-y-6 md:flex-row md:gap-y-0 md:gap-x-12">
                        <img src={testimonialQuote} className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20" />
                        <Testimonial
                            quote='Fylo has improved our team productivity by an order of magnitude. Since we maked the switch our team has become a well-oiled collaboration machine.'
                            image={testimonialPerson1}
                            name='Satish Patel'
                            role='Founder & CEO Huddle'
                        />
                        <Testimonial
                            quote='Fylo has improved our team productivity by an order of magnitude. Since we maked the switch our team has become a well-oiled collaboration machine.'
                            image={testimonialPerson2}
                            name='Bruce McKeansie'
                            role='CTO Orance Inc.'
                        />
                        <Testimonial
                            quote='Fylo has improved our team productivity by an order of magnitude. Since we maked the switch our team has become a well-oiled collaboration machine.'
                            image={testimonialPerson3}
                            name='Eva Brown'
                            role='COO Nestle'
                        />
                    </div>
                </div>
            </section>

            <section id='early-access' className='relative w-full px-6 dark:bg-darkBlue2 md:px-0'>
                <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
                    <h5 className="text-2xl font-bold">
                        Get early access today
                    </h5>
                    <p className="text-sm">
                        It only takes a minute to sign up and our free started tier is extremely generous. If you have any questions, our support team would be happy to help you.
                    </p>

                    <div className="flex flex-col items-start gap-6 md:flex-row">
                        <div className="w-full md:flex-1">
                            <input
                                type="text"
                                className="w-full px-10 py-3 rounded-full focus:outline-none text-black"
                                placeholder='email@example.com'
                            />
                        </div>

                        <button className="w-full md:flex-1 py-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">
                            Get started for free
                        </button>
                    </div>
                </div>
            </section>

            <FyloFooter />
        </>
    );
}

interface FeatureItemProps {
    logo: string;
    text: string;
    detail: string;
}

const FeatureItem = ({ logo, text, detail }: FeatureItemProps) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 md:w-1/2">
            <div className="flex items-center justify-center h-24 mb-6">
                <img src={logo} />
            </div>
            <h3 className="text-xl font-bold">
                {text}
            </h3>
            <p className="max-w-md">
                {detail}
            </p>
        </div>
    );
};

interface TestimonialProps {
    quote: string;
    image: string;
    name: string;
    role: string;
}

const Testimonial = ({ quote, image, name, role }: TestimonialProps) => {
    return (
        <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
                {quote}
            </p>
            <div className="flex gap-4">
                <img src={image} className='w-10 h-10 rounded-full' />
                <div>
                    <h5 className="text-sm font-semibold">
                        {name}
                    </h5>
                    <p className="text-xs font-extralight">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
};