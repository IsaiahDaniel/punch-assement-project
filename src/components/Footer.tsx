import SliceTwoIcon from "../assets/icons/slice-2.svg";
import Rectangle from "../assets/icons/rectangle.svg";
import FooterZuwiat from "../assets/icons/footer-zuilt.svg";
import ZwiltLogo from "../assets/icons/zwilt.svg";
import Button from "./Button";
import { FOOTER_DATA } from "../constants/app.constants";

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="relative">
            <img src={SliceTwoIcon} alt="" className="absolute -top-[3.75rem]" />
            <div className='bg-[#0C0C0C] pt-20 min-h-full'>
                <div className="flex-col-center mx-auto text-white text-6xl pt-40"
                    style={{ background: `url(${Rectangle})`, backgroundPosition: "center", backgroundSize: "cover", height: "400px", width: "80%", backgroundRepeat: "no-repeat" }}
                >
                    <h1 className="mt-10">Need a job done, and done</h1>
                    <h1 className="mt-3">well? Get started</h1>
                    <img src={FooterZuwiat} alt="" className="mt-5" />
                </div>

                <div className="wrapper mt-10">
                    <div className="flex items-center justify-between">
                        <div className="mr-8">
                            <img src={ZwiltLogo} alt="" />
                            <p className="text-white text-xs mt-4">
                                We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                            </p>
                        </div>
                        <div className="w-full items-end justify-end">
                            <h2 className="text-5xl text-white leading-1 ml-auto">
                                Connecting the right people to <br /> the right businesses.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="wrapper py-5 mt-10">
                    <div className="grid grid-cols-5">
                        <div className="mr-5">
                            <p className="text-[#C6C4C4]">LINKS AND REDIRECTS</p>
                            <div className="flex items-center space-x-5 mt-5">
                                <Button classNames="bg-[#292B34] text-xs rounded-md">Hire now</Button>
                                <Button classNames="bg-[#292B34] text-xs rounded-md">Apply now</Button>
                            </div>
                        </div>

                        {FOOTER_DATA.map(item => (
                            <div className="text-white ml-20">
                                <h3 className="mb-3 text-xs text-[#C6C4C4]">{item.header}</h3>
                                <ul className="space-y-4">
                                    {item.items.map(data => (
                                        <li className="text-base">{data}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="border-t border-t-[#C6C4C4] mt-10">
                    <div className="wrapper flex-between">
                        <p className="py-3 text-[#C6C4C4]">All rights reserved  by Zwilt</p>
                        <div className="flex items-center space-x-5 py-3">
                            <p className="underline text-[#C6C4C4]">Privacy Policy</p>
                            <p className="underline text-[#C6C4C4]">Terms and Conditions</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer;