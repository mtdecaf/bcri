const PageNav = () => {
    return (
        <div className="page-nav">
            <ul className="page-nav__list">
                <li>
                <button className="page-nav__item page-nav__service">service</button>
                </li>
                <li>
                <button className="page-nav__item page-nav__testimonial">
                    Testimonial
                </button>
                </li>
                <li>
                <button className="page-nav__item page-nav__company">Company</button>
                </li>
                <li>
                <button className="page-nav__item page-nav__contact">
                    Contact Us
                </button>
                </li>
            </ul>
        </div>
  );
};

export default PageNav;
