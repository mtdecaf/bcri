import PageNav from "./PageNav/PageNav"
import FooterSection from "./FooterSection/FooterSection"

const Layout = ({ children }) => {
    return (
        <>
            <PageNav />
            <main>{children}</main>
            <FooterSection />
        </>
    )
}

export default Layout
