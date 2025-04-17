import { BackgroundImage, Button, Image } from "@mantine/core";
import { Star } from "lucide-react";

const FeaturedProducts = () => {
    const products = [
        {
            url: "/sample/sample1.jpg",
            type: "Handmade",
            title: "Thangka Art",
            name: "Traditional Thangka Painting",
            price: 189.99,
            discountPercent: 15,
            rating: 4.8,
            reviews: 24,
        },
        {
            url: "/sample/sample2.jpg",
            type: "Textile",
            title: "Pashmina Shawl",
            name: "Pure Pashmina Shawl",
            price: 129.99,
            discountPercent: 10,
            rating: 4.5,
            reviews: 18,
        },
        {
            url: "/sample/sample3.png",
            type: "Musical Instrument",
            title: "Singing Bowl",
            name: "Hand hammered Singing Bowl",
            price: 79.99,
            discountPercent: 5,
            rating: 4.7,
            reviews: 32,
        },
        {
            url: "/sample/sample4.jpg",
            type: "Decor",
            title: "Wooden Mask",
            name: "Traditional Wooden Mask",
            price: 49.99,
            discountPercent: 0,
            rating: 4.2,
            reviews: 15,
        },
        {
            url: "/sample/sample5.jpg",
            type: "Stationery",
            title: "Handmade Paper Notebook",
            name: "Eco-friendly Paper Notebook",
            price: 19.99,
            discountPercent: 20,
            rating: 4.9,
            reviews: 40,
        },
        {
            url: "/sample/sample6.jpg",
            type: "Footwear",
            title: "Felt Slippers",
            name: "Woolen Felt Slippers",
            price: 29.99,
            discountPercent: 10,
            rating: 4.3,
            reviews: 22,
        },
        {
            url: "/sample/sample7.jpg",
            type: "Jewelry",
            title: "Silver Jewelry",
            name: "Handcrafted Silver Necklace",
            price: 99.99,
            discountPercent: 25,
            rating: 4.6,
            reviews: 28,
        },
        {
            url: "/sample/sample8.jpg",
            type: "Kitchenware",
            title: "Tea Set",
            name: "Ceramic Tea Set",
            price: 59.99,
            discountPercent: 15,
            rating: 4.4,
            reviews: 20,
        },
    ];

    return (
        <div className=" ">
            <div className={"text-center "}>
                <p className={"font-bold text-2xl"}>Featured Products</p>
                <p className={"text-[#6C757D] mb-8"}>
                    Our most popular traditional Nepalese products, handcrafted by local artisans
                </p>
            </div>
            <div className={"grid grid-cols-4 gap-6  "}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={"h-[25em] shadow-2xl rounded-lg space-y-3  "}
                    >
                        <BackgroundImage
                            src={product.url}
                            className={" "}
                            h={"15rem"}
                        >
                            <p className={"bg-secondary text-white absolute text-xs m-2 p-1 rounded-md"}>

                            {product.type}
                            </p>
                        </BackgroundImage>
                        <div className={"p-3"}>
                            <p className={"text-[#6C757D] text-xs "}>{product.title}</p>
                            <p className={"text-secondary font-bold"}>{product.name}</p>
                            <div className={"flex gap-5 items-center"}>
                                <p className={"text-button font-bold"}>
                                    ${(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
                                </p>
                                {product.discountPercent > 0 && (
                                    <>
                                        <p className={"text-[#6C757D] text-xs"}>
                                            <s>${product.price.toFixed(2)}</s>
                                        </p>
                                        <p className={"text-xs rounded-md px-1 bg-[#FFEAEA]"}>
                                            -{product.discountPercent}%
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className={"flex justify-between items-center mt-2"}>
                                <div className={"flex items-center text-xs gap-1"}>
                                    <Star size={12} fill={"black"} />
                                    <p>{product.rating}</p>
                                    <p>({product.reviews})</p>
                                </div>
                                <Button color={"black"}>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;