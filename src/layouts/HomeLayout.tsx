import React, {useState} from "react";

import {Burger, Button, Combobox, Modal, TextInput, Image, Drawer} from "@mantine/core";
import {Search, ShoppingCart, Star, Trash} from "lucide-react";
import {useDisclosure} from "@mantine/hooks";
import CommonFooter from "@/components/common/Footer";
import {useRouter} from "next/router";



const Layout: React.FC<any> = ({ children }) =>{
const [opened, { toggle }] = useDisclosure();
    const [modalOpen, { open, close }] = useDisclosure(false);
    const [quantity, setQuantity] = useState(1);
    const  router = useRouter()

    const cartItems = [
        {
            id: 1,
            name: "Traditional Thangka Painting",
            price: 159.99,
            image: "/sample/sample2.jpg",
            rating: 4,
        },
    ];

    const handleRemove = (id:any) => {
        // Logic to remove item (e.g., update state or context)
        console.log(`Remove item ${id}`);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * quantity, 0);
    const shipping = 0.0;
    const total = subtotal + shipping;

    return (
        <main>
            <Modal
                opened={modalOpen}
                onClose={close}
                title={<span className="font-bold text-lg">Your Shopping Cart</span>}
                centered
                size="md"
                radius="md"
                className="font-lexend"
                styles={{
                    content: { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
                    header: { paddingBottom: 0 },
                }}
            >
                <div className="space-y-4">
                    {/* Cart Items */}
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex  gap-4 border-b pb-4">
                            <Image
                                h={100}
                                radius={"md"}
                                src={item.image}
                                alt={item.name}
                            />
                            <div className="">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-sm">{item.name}</h4>
                                        <p className="text-sm">${item.price.toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => handleRemove(item.id)}>
                                        <Trash size={16} className="text-gray-500 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="black"  />
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className=" p-2 bg-secondary"
                                    >
                                        -
                                    </div>
                                    <span className="text-sm bg-[#F5F5F5] p-3">{quantity}</span>
                                    <div
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-3 "
                                    >
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Summary */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </Modal>
            <Drawer
                opened={opened}
                onClose={toggle}
                title="Himalayan Peaks"
                radius={"md"}
                position="right"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <Button className={"cursor-pointer" } onClick={()=>router.push("/marketplace")}>MarketPlace</Button>
            </Drawer>
                <div className="flex  items-center justify-around mt-9 mx-36" >

                    <Image src={"/logo.svg"} alt={"logo"} width={180} height={72} />
                    <div className={"flex items-center gap-2 "}>
                        <TextInput
                            styles={{
                                input: {
                                    textAlign: 'center',
                                    color: "black",
                                    border: "none",
                                    backgroundColor: "#F2F1FF",
                                    '&::placeholder': {
                                        color: 'black',
                                    },
                                },
                            }}
                            placeholder={"Search for Products.."}
                            leftSection={<Search size={16} color={"black"} />}
                            radius={"xl"}
                        />
                    <ShoppingCart onClick={open} className={"cursor-pointer"}/>

                    </div>
                    <div className="flex items-center gap-2 ">
                         <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    <Button radius={"xl"} color={"black"} > Login </Button>

                    </div>
                </div>
            <section>{children}</section>
            <div>
                <CommonFooter/>
            </div>
        </main>
    );
};

export default Layout;
