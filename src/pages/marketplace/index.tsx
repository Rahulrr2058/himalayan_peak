import Marketplace from "@/components/modules/HomePage/MarketPlace/MarketPlace";
import HomeLayout from "@/layouts/HomeLayout";

const Market=()=>{
    return <Marketplace />

}
Market.getLayout = (page: any) => <HomeLayout>{page}</HomeLayout>;
export default Market;
