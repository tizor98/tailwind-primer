import footerPhone from '../assets/fylo/icon-phone.svg';
import footerEmail from '../assets/fylo/icon-email.svg';
import footerFacebook from '../assets/fylo/facebook.svg';
import footerInstagram from '../assets/fylo/instagram.svg';
import footerTwitter from '../assets/fylo/twitter.svg';

export default function FyloFooter() {
    return (
        <footer className='bg-darkBlue2 w-full text-white pt-4'>
            <div className="container mx-auto px-5 pb-10">
                <div className="flex flex-col justify-between gap-24 md:flex-row md:gap-0">
                    <div className="mt-10 space-y-6">
                        <div className="flex items-center space-x-3 md:-mt-10">
                            <div className="w-6">
                                <img src={footerPhone} className="scale-10" />
                            </div>
                            <div>+1 1111111 111</div>
                        </div>
                        <div className="flex items-center space-x-3 md:-mt-10">
                            <div className="w-6">
                                <img src={footerEmail} className="scale-10" />
                            </div>
                            <div>example@fylo.com</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 text-xl md:text-base md:gap-20 md:flex-row">
                        <div className="flex flex-col gap-3">
                            <a href="">About</a>
                            <a href="">Jobs</a>
                            <a href="">Press</a>
                            <a href="">Blog</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="">Contract us</a>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                        </div>
                    </div>

                    <div className="flex justify-center pb-10 gap-3">
                        <div>
                            <a href="">
                                <img src={footerFacebook} alt="" className="p-2 bg-darkBlue1 rounded-full custom-ficon" />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src={footerTwitter} alt="" className="p-2 bg-darkBlue1 rounded-full custom-ficon" />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src={footerInstagram} alt="" className="p-2 bg-darkBlue1 rounded-full custom-ficon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}