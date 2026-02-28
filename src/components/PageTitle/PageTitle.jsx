import "./PageTitle.scss";

const PageTitle = ({ title, children }) => {
    return (
        <div className="page-title__wrapper">
            <h1 className="page-title__h1">{title}</h1>
            {children}
        </div>
    );
}
export default PageTitle;