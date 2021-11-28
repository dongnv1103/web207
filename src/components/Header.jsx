import { Link, Outlet } from "react-router-dom";
export default function Header() {
    return (
        <header className="header trans_300">
            {/* Top Navigation */}
            <div className="top_nav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top_nav_left">
                                free shipping on all u.s orders over $50
                            </div>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="top_nav_right">
                                <ul className="top_nav_menu">
                                    {/* Currency / Language / My Account */}
                                    <li className="currency">
                                        <a href="#">
                                            usd
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="currency_selection">
                                            <li>
                                                <a href="#">cad</a>
                                            </li>
                                            <li>
                                                <a href="#">aud</a>
                                            </li>
                                            <li>
                                                <a href="#">eur</a>
                                            </li>
                                            <li>
                                                <a href="#">gbp</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="language">
                                        <a href="#">
                                            English
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="language_selection">
                                            <li>
                                                <a href="#">French</a>
                                            </li>
                                            <li>
                                                <a href="#">Italian</a>
                                            </li>
                                            <li>
                                                <a href="#">German</a>
                                            </li>
                                            <li>
                                                <a href="#">Spanish</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="account">
                                        <a href="#">
                                            My Account
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="account_selection">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-sign-in" aria-hidden="true" />
                                                    Sign In
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user-plus" aria-hidden="true" />
                                                    Register
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Navigation */}
            <div className="main_nav_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="logo_container">
                                <a href="#">
                                    colo<span>shop</span>
                                </a>
                            </div>
                            <nav className="navbar">
                                <ul className="navbar_menu">
                                    <li>
                                        <Link to="/">Home Page</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Danh muc</Link>
                                    </li>
                                    <li>
                                        <a href="/contact">contact</a>
                                    </li>
                                    {/* <li>
                                        <Link to="/admin">Quản trị</Link>
                                    </li> */}
                                    <li>
                                        <Link to="signup">Đăng ký</Link>
                                    </li>
                                    <li>
                                        <Link to="signin">Đăng nhập</Link>
                                    </li>
                                </ul>
                                <ul className="navbar_user">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="checkout">
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                            <span id="checkout_items" className="checkout_items">
                                                2
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="hamburger_container">
                                    <i className="fa fa-bars" aria-hidden="true" />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}