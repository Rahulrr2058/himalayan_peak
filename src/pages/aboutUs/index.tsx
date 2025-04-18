import HomeLayout from "@/layouts/HomeLayout";
import AboutUS from "@/components/modules/AboutUs/aboutus";

const Home = () => {
    return (

        <AboutUS/>
    );
};

export default Home;

Home.getLayout = (page: any) => <HomeLayout>{page}</HomeLayout>;
