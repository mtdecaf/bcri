import PageNav from "./PageNav/PageNav"

const Layout = ({ children }) => {
    return (
        <>
            <PageNav />
            <main>{children}</main>
        </>
    )
}

export default Layout
