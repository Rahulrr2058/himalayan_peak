import { Sun } from "lucide-react";

const WhyChooseUS = () => {
    const sectionHeader = {
        title: "Why Choose Us",
        subtitle: "We pride ourselves on bringing you the finest Nepalese cultural products",
    };

    const data = [
        {
            icon: "Sun",
            title: "Authentic Products",
            description: "All our products are 100% authentic, sourced directly from skilled Nepalese artisans.",
        },
        {
            icon: "Sun",
            title: "Cultural Heritage",
            description: "We preserve Nepal’s rich traditions by showcasing handcrafted cultural treasures.",
        },
        {
            icon: "Sun",
            title: "Sustainable Practices",
            description: "Our products are made with eco-friendly materials and ethical craftsmanship.",
        },
        {
            icon: "Sun",
            title: "Fast Delivery",
            description: "Enjoy quick and reliable shipping to bring Nepal’s finest to your doorstep.",
        },
    ];

    return (
        <div className="font-lexend my-10 px-4">
            <div className="text-center">
                <p className="font-bold text-2xl">{sectionHeader.title}</p>
                <p className="text-gray-600 mt-2">{sectionHeader.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center text-center mt-5">
                {data.map((item, index) => (
                    <div key={index} className="shadow-md space-y-2.5 p-5 rounded-lg bg-white">
                        <Sun size={30} className="mx-auto text-secondary" />
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUS;