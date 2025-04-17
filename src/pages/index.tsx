import MainContent from "../components/modules/HomePage/content";
import HomeLayout from "@/layouts/HomeLayout";



const Home = () => {
  return <MainContent />;
};

export default Home;

Home.getLayout = (page: any) => <HomeLayout>{page}</HomeLayout>;
