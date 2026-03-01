import "./PageNotFound.scss";
import PageLayout from "../../components/PageLayout/PageLayout";

const PageNotFound = ({ title, content }) => {

    return (
        <PageLayout>
            <div className="page-not-found__header" >
                <h1 className="page-not-found__title">{title}</h1>
            </div>
            <p className="page-not-found__content">{content}</p>
        </PageLayout>
    );
};

export default PageNotFound;