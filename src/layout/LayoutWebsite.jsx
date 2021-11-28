import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Deal from "../components/Deal";
import BestSeller from "../components/BestSeller";
import Bennefit from "../components/Benefit";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function LayoutWebsite() {
    return (
        <div class="super_container">
            <Header></Header>
            <Slider></Slider>
            <Banner></Banner>
            <div>
                <Outlet />
            </div>
            <Deal></Deal>
            <BestSeller></BestSeller>
            <Bennefit></Bennefit>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
}
