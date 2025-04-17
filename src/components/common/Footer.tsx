import {TextInput} from "@mantine/core";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";
const CommonFooter = () => {
    const footerData = {
        about: {
            title: "About Us",
            description:
                "Himalayan Peaks is dedicated to bringing authentic Nepalese cultural products to the global market while supporting local artisans and preserving traditional craftsmanship.",
            socialIcons: [
                { name: "Facebook", icon: <Facebook /> },
                { name: "Instagram", icon: <Instagram /> },
                { name: "Twitter", icon: <Twitter /> },
                { name: "Pinterest", icon: <Linkedin /> },
            ],
        },
        quickLinks: {
            title: "Quick Links",
            links: [
                "Home",
                "Shop",
                "About Us",
                "Blog",
                "Shipping & Returns",
                "Privacy Policy",
                "Terms & Conditions",
            ],
        },
        categories: {
            title: "Categories",
            links: [
                "Thangka Art",
                "Handicrafts",
                "Pashmina Shawls",
                "Himalayan Jewelry",
                "Singing Bowls",
                "Tea & Spices",
                "Prayer Flags",
            ],
        },
        contact: {
            title: "Contact Us",
            info: [
                { icon: <MapPin/>, text: "Kathmandu, Nepal" },
                { icon: <Phone/>, text: "+977-1-4123456" },
                { icon: <Mail/> ,text: "info@himalayantreasures.com" },
                { icon: <Clock/>, text: "Monday - Saturday: 10am - 7pm" },
            ],
        },
        copyright: "© 2025 Himalayan Peaks. All Rights Reserved.",
    };

    return (
        <div>
            <div className="text-center text-white bg-secondary p-24 space-y-4">
                <p className={"font-bold text-3xl"}>Subscribe to Our Newsletter</p>
                <p className={"text-md"}>Stay updated with our latest products, artisan stories, and exclusive offers.</p>
                <div className=" flex justify-center items-center   ">
                <TextInput radius={"xl"}
                        className={"w-[25rem]"}
                           placeholder={"Your Email Address"}
                           variant={"filled"}
                    rightSection={<div className={"bg-footer h-[36px] flex items-center text-center px-5 rounded-r-full  text-xs font-bold text-white"}> <p className={"text-center"}>
                        Subscribe
                    </p></div>}   />
                </div>
            </div>
            <div className={"bg-footer"}>
                <div>

                </div>

            </div>
            <div className="bg-footer text-white font-lexend py-10 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* About Us */}
                    <div>
                        <h3 className="text-white font-bold uppercase mb-4 ">
                            {footerData.about.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                            {footerData.about.description}
                        </p>
                        <div className="flex space-x-3">
                            {footerData.about.socialIcons.map((social, index) => {

                                return (
                                    <a
                                        key={index}
                                        href="#"
                                        className="p-2 rounded-full bg-gray-400 text-white hover:text-white hover:bg-gray-600 transition"
                                    >
                                        {social.icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase mb-4">
                            {footerData.quickLinks.title}
                        </h3>
                        <ul className="space-y-2">
                            {footerData.quickLinks.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-white/80 text-sm hover:text-white transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-bold uppercase mb-4">
                            {footerData.categories.title}
                        </h3>
                        <ul className="space-y-2">
                            {footerData.categories.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-white/80 text-sm hover:text-white transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white font-bold uppercase mb-4">
                            {footerData.contact.title}
                        </h3>
                        <ul className="space-y-2">
                            {footerData.contact.info.map((item, index) => {

                                return (
                                    <li key={index} className="flex items-center space-x-2">
                                        {item.icon}
                                        <span className="text-white/80 text-sm">{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-white/80 text-sm border-t mx-36 border-gray-400 pt-4">
                    {footerData.copyright}
                </div>
            </div>
        </div>
    )
}
export default CommonFooter;