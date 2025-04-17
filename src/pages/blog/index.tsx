import HomeLayout from "@/layouts/HomeLayout";
import HimalayanBlog from "@/components/modules/Blog/himalyanBlog";

const Home = () => {
    return (

        <HimalayanBlog />
    );
};

export default Home;

Home.getLayout = (page: any) => <HomeLayout>{page}</HomeLayout>;
