import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links-container">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" alt="Logo" width={118} height={18} className="object-contain" />
                    <p className="text-base text-gray-700">
                        CarHub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((i) => (
                                <Link key={i.title} href={i.url} className="text-gray-500">
                                    {i.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p>@2023 CarHub. All Rights Reserved </p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500" >
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-gray-500" >
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
