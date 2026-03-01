import "./PageLayout.scss";
import TopNavbar from "../TopNavbar/TopNavbar";
import SideNavigation from "../SideNavigation/SideNavigation";

const PageLayout = ({ children }) => {
    return (
        <div className="page-layout__wrapper">
            <TopNavbar />
            <div className="page-layout__sidebar-content-wrapper">
                <SideNavigation />
                <main className="page-layout__main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
export default PageLayout;