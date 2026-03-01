import "./PageTitle.scss";

const PageTitle = ({ title, subtitle = "", children }) => {
    return (
        <div className="page-title__wrapper">
            <div className="page-title__titles-wrapper"><h1 className="page-title__h1">{title}</h1>
                <h3 className="page-title__h3">{subtitle}</h3></div>
            {children}
        </div>
    );
}
export default PageTitle;