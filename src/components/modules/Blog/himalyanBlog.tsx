import Image from "next/image";
import Link from "next/link";
import { Button, Pagination, Tabs } from "@mantine/core";
import CommonHeader from "@/components/common/CommonHeader";
import {IconCalendar, IconMessageCircle, IconUser} from "@tabler/icons-react";
import {Calendar, MessageCircle, User} from "lucide-react";

const featuredArticle = {
    title: "The Art of Nepalese Wood Carving: A Centuries-Old Tradition",
    date: {
        value: "March 15, 2025",
        icon: <IconCalendar size={16} stroke={1.5} />, // Calendar icon for date
    },
    comments: {
        value: 24,
        icon: <IconMessageCircle size={16} stroke={1.5} />, // Comment icon for comments
    },
    author: {
        value: "Admin",
        icon: <IconUser size={16} stroke={1.5} />, // User icon for author
    },
    excerpt:
        "Dive into the intricate world of Nepalese wood carving, a craft that has adorned temples, palaces, and homes for centuries. Learn about the skilled artisans who maintain this tradition and the symbolism behind their mesmerizing patterns.",
    image: "/images/wood-carving.jpg",
};

const latestArticles = [
    {
        id: 1,
        category: "Cultural Heritage",
        title: "The Sacred Art of Thangka",
        date: "February 28, 2025",
        comments: 15,
        excerpt:
            "Explore the spiritual significance and artistic techniques behind Thangka paintings, and how our artisans are preserving this ancient Buddhist art form.",
        image: "/images/thangka.jpg",
    },
    {
        id: 2,
        category: "Artisan Stories",
        title: "Pashmina: The Goat Garment Journey",
        date: "February 28, 2025",
        comments: 15,
        excerpt:
            "Follow the fascinating process of creating luxurious Pashmina shawls, from the Himalayan goats to the skilled hands of weavers in remote mountain villages.",
        image: "/images/pashmina.jpg",
    },
    {
        id: 3,
        category: "Craftsmanship",
        title: "Our Singing Bowls with the Master Behind",
        date: "February 28, 2025",
        comments: 15,
        excerpt:
            "An intimate interview with Karma Sherpa, a master craftsman who shares the secrets, challenges, and joys of creating these powerful sound healing instruments.",
        image: "/images/singing-bowls.jpg",
    },
];




function TabsSection() {
    return (
        <nav className="bg-white py-4" >
            <div className="max-w-6xl mx-auto px-4 flex justify-center">
                <Tabs
                    color="gray-300"
                    defaultValue="all"
                    variant="pills"
                    radius="xl"
                    className="bg-white"
                >
                    <Tabs.List className="flex gap-3 justify-start">
                        <Tabs.Tab
                            value="all"
                            component={Link}
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            All
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="artisan"
                            component={Link}
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            Artisan Stories
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="cultural"
                            component={Link}
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            Cultural Heritage
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="craftsmanship"
                            component={Link}
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            Craftsmanship
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="travel"
                            component={Link}
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            Travel
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="#"
                            component={Link}
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-white data-[active]:bg-black data-[active]:text-white bg-gray-300 hover:bg-gray-400 rounded-full transition"
                        >
                            Behind the Scenes
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </div>
        </nav>
    );
}

export default function HimalayanBlog() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <CommonHeader />

            {/* Tabs Section */}
            <TabsSection />

            {/* Featured Article Section */}
            <section className="my-12 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Featured Article</h2>
            <p className="text-base text-gray-500 mb-6 text-center">Our most popular story this month</p>
            <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-lg">
                <div className="flex-1 relative">
                    <Image
                        src="/homepage-img/test.svg"
                        alt={featuredArticle.title}
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                        priority // Optional: for faster loading of featured image
                    />
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded uppercase font-semibold">
                        Featured
                    </span>
                </div>
                <div className="flex-1 p-6">
                    <div className="text-gray-500 text-xs mb-3 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <User size={16} /> {featuredArticle.author.value}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar size={16} /> {featuredArticle.date.value}
                        </span>
                        <span className="flex items-center gap-1">
                            <MessageCircle size={16} /> {featuredArticle.comments.value} Comments
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{featuredArticle.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{featuredArticle.excerpt}</p>
                    <Link href={`/article/${featuredArticle.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button
                            color="dark"
                            radius="xl"
                            className="bg-black hover:bg-gray-800 text-white rounded-full w-32 h-12 flex items-center justify-center"
                        >
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
            <section className="my-12 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-2 text-center">Latest Articles</h2>
                <p className="text-base text-gray-500 mb-6 text-center">Stay updated with our most recent stories and insights</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestArticles.map((article) => (
                        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image
                                    src="/homepage-img/test.svg"
                                    alt={article.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-5">
                                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-3 uppercase font-medium">
                                    {article.category}
                                </span>
                                <div className="text-gray-500 text-sm mb-2">
                                    <span>{article.date}</span> • <span>{article.comments} Comments</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                                <Link href={`/article/${article.id}`}>
                                    <span className="text-blue-600 hover:underline text-sm font-medium">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className="flex justify-center my-12">
                <Pagination total={6} color="dark" radius="md" />
            </div>
        </div>
    );
}