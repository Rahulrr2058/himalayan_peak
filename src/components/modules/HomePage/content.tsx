import FeaturedProducts from "@/components/common/featuredProducts";
import { BackgroundImage, Button, Image } from "@mantine/core";
import { ShoppingBag } from "lucide-react";

export default function Content() {
    const collection =[
        {
            url:"/sample/sample1.jpg",
            title:"Thangka Paintings",
            number:"25"

        },
        {
            url:"/sample/sample2.jpg",
            title:"Handicrafts",
            number:"42"

        },
        {
            url:"/sample/sample3.png",
            title:"Pashmina Shawls",
            number:"38"

        },
        {
            url:"/sample/sample5.jpg",
            title:"Himalayan Jewelry",
            number:"18"

        },
    ]
    return (
        <div>
            <div className="grid grid-cols-5 gap-3 mx-36 mt-6">
                <div className="h-[20rem] bg-[#F2F1FF] col-span-4 rounded-lg grid grid-cols-7">
                    <div className="text-center m-auto col-span-2 font-lexend ">
                        <p className="font-bold text-2xl">Luxury from the<br/> Roof of the World!</p>
                        <p>Handcrafted luxury, inspired by <br/> Himalayan heritage.</p>
                        <Button
                            className="mt-4 rounded-full"
                            radius="xl"
                            color="black"
                            leftSection={<ShoppingBag size={18} />}
                        >
                            Shop Now
                        </Button>
                    </div>
                    <div className="col-span-5 overflow-hidden ml-16 rounded-tl-full rounded-bl-full  ">
                        <Image
                            src="/sample/dance.png"
                            h="20rem"
                            w="100%"
                            radius={"lg"}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="rounded-full">
                    <Image src="/sample/khukuri.png" h="20rem" radius="lg" alt="Home" />
                </div>
            </div>
            <div className={"flex text-white my-10 text-center justify-around bg-black font-lexend "}>
                <p  className={""} > <span className={"text-xl font-bold"} > 1,000+</span> <br/> Regular Customers</p>
                    <p className={""} > <span className={"text-xl font-bold"} > 1,000+</span> <br/> Regular Customers</p>
                    <p className={""} > <span className={"text-xl font-bold"} > 1,000+</span> <br/> Regular Customers</p>
            </div>
            <div className={"mb-10"}>
                <div className={"text-center "}>

                <p className={"font-bold text-2xl"}>Explore Our Collection</p>
                <p className={"text-[#6C757D] mb-8"}>Browse through our carefully curated categories of authentic Nepalese cultural products</p>
                </div>
                <div className="grid grid-cols-4 gap-6 mx-36 ">
                    {collection.map((item, i) => (
                        <div className="flex flex-col items-end" key={i}>
                            <BackgroundImage radius="md" src={item.url} h="10rem" w="100%">
                                <div className="bg-secondary  rounded-b-md p-2 text-white mt-28  ">
                                    <p className={"font-bold"}>{item.title}</p>
                                    <p className={"text-xs"}>{item.number} Products</p>
                                </div>
                            </BackgroundImage>
                        </div>
                    ))}
                </div>


            </div>
            <div className={"mx-36 mb-10"}>

            <FeaturedProducts />
            </div>
            <div className={"bg-[#F8EDED] py-16"}>
                <div className={"grid grid-cols-2 gap-8 mx-36 items-center  " }>
                    <Image radius={"md"} src="/sample/sample6.png"  w="100%" />
                    <div className={"space-y-5 "}>
                        <p className={"font-lexend text-secondary text-2xl font-bold "}>
                            Meet Our Artisans
                        </p>
                        <p>
                            Our products are crafted by skilled artisans from remote villages of Nepal who
                            have inherited centuries-old traditional craftsmanship. Each product is a
                            testament to their skill, patience, and cultural heritage
                        </p>
                        <p>
                            By purchasing from Himalayan Peaks, you're not just acquiring a beautiful
                            handcrafted item; you're supporting these artisans and helping preserve
                            ancient Nepalese crafting traditions for generations to come.
                        </p>
                        <Button color={"black"} radius={"xl"} >Learn About Our Artisans</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}