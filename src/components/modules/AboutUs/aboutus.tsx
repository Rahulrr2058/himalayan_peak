import CommonHeader from "@/components/common/CommonHeader";

// Mock data
const aboutData = {
    title: "Our Story",
    description: "How our journey began in the heart of the Himalayas",
    content: [
        {
            paragraph:
                "Founded in 2025, Himalayan Peaks began with a simple mission: to create a bridge between the skilled artisans of Nepal and the global market. Our founder, Adarsh Pokharel, grew up in a small village near Mount Everest where he witnessed firsthand the incredible craftsmanship of local artisans who struggled to make a living from their traditional skills.",
        },
        {
            paragraph:
                "After years of guiding trekkers through the Himalayas, Adarsh recognized an opportunity to help his community by showcasing their exceptional handicrafts to the world. What started as a small collection of handmade items from his village has grown into a thriving marketplace featuring products from artisans across Nepal.",
        },
        {
            paragraph:
                "Today, Himalayan Peaks works with over 200 artisans from different regions of Nepal, helping them preserve their cultural heritage while providing sustainable income opportunities. Every product in our collection tells a story of tradition, skill, and the breathtaking beauty of the Himalayan landscape.",
        },
    ],
    image: {
        src:"/homepage-img/test.svg",// Updated to a realistic path
        alt: "Artisan with traditional instruments",
    },
    team: [
        {
            name: "Adarsh Pokharel",
            title: "Founder & CEO",
            description:
                "Former mountain guide with a passion for preserving Nepalese cultural heritage.",
            image:"/homepage-img/test.svg", // Replace with actual image path
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Maya Gurung",
            title: "Director of Artisan Relations",
            description:
                "Expert in traditional Nepalese crafts and advocate for women artisans.",
            image: "/homepage-img/test.svg", // Replace with actual image path
            social: {
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            name: "Tenzin Norgay",
            title: "Head of Operations",
            description:
                "Logistics expert ensuring products reach our global customers safely.",
            image: "/homepage-img/test.svg", // Replace with actual image path
            social: {
                linkedin: "#",
                facebook: "#",
            },
        },
    ],
    impact: {
        title: "Our Social Impact",
        subtitle: "How your purchase makes a difference",
        metrics: [
            {
                value: "200+",
                label: "Artisans Supported",
            },
            {
                value: "15",
                label: "Communities Reached",
            },
            {
                value: "3",
                label: "Schools Built",
            },
            {
                value: "85%",
                label: "Revenue to Artisans",
            },
        ],
        description:
            "From building schools and water systems to providing healthcare access and vocational training, your purchase directly contributes to improving the lives of our artisan partners and their communities.",
        button: {
            text: "Learn More About Our Impact",
            url: "#", // Replace with actual URL
        },
    },
};

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <CommonHeader
                title={"About Himalayan Peaks"}
                description={[
                    "Connecting global customers with authentic Nepalese craftsmanship while ",
                    "supporting local artisans.",
                ]}
            />

            {/* Our Story Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">
                        {aboutData.title}
                    </h2>
                    <h4 className="text-center mt-2 text-gray-600">{aboutData.description}</h4>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src={aboutData.image.src}
                            alt={aboutData.image.alt}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-3 text-gray-700">
                        {aboutData.content.map((item, index) => (
                            <p key={index} className="text-md"> {/* Fixed text-md to text-lg */}
                                {item.paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Our Team</h2>
                    <h4 className="mt-2 text-gray-600">The people behind Himalayan Peaks</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutData.team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-base text-gray-600">{member.title}</p> {/* Fixed text-md to text-base */}
                            <p className="text-sm text-black mt-2">{member.description}</p>
                            <div className="flex space-x-4 mt-4">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/icons/linkedin.svg" // Updated to a realistic path
                                            alt="LinkedIn"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/icons/twitter.svg" // Updated to a realistic path
                                            alt="Twitter"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                                {member.social.instagram && (
                                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/icons/instagram.svg" // Updated to a realistic path
                                            alt="Instagram"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                                {member.social.facebook && (
                                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/icons/facebook.svg" // Updated to a realistic path
                                            alt="Facebook"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Social Impact Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        {aboutData.impact.title}
                    </h2>
                    <h4 className="mt-2 text-gray-600">{aboutData.impact.subtitle}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {aboutData.impact.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl font-bold text-gray-900">{metric.value}</p>
                            <p className="text-base text-gray-600 mt-2">{metric.label}</p>
                        </div>
                    ))}
                </div>

                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                    {aboutData.impact.description}
                </p>

                <div className="text-center">
                    <a
                        href={aboutData.impact.button.url}
                        className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition"
                    >
                        {aboutData.impact.button.text}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;