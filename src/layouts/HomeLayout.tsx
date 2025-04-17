import React from "react";
import Image from "next/image";
import {Burger, Button, Combobox, TextInput} from "@mantine/core";
import {Search, ShoppingCart} from "lucide-react";
import {useDisclosure} from "@mantine/hooks";
import CommonFooter from "@/components/common/Footer";



const Layout: React.FC<any> = ({ children }) =>{
const [opened, { toggle }] = useDisclosure();
    return (
        <main>
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
                    <ShoppingCart/>

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
