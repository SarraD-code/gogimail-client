import "./ReviewPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import PageTitle from "../../components/PageTitle/PageTitle";
import StepTag from "../../components/StepTag/StepTag";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ReviewPage = ({ emails }) => {
    const { id } = useParams();
    const [isLodaing, setIsLoading] = useState(true);

    useEffect(() => {
        if (emails.length > 0)
            setIsLoading(false);
        else
            setTimeout(() => { setIsLoading(false); }, 5000);
    }, [emails]);

    return (
        isLodaing ?
            <PageLayout>
                <LoadingSpinner delay={5000} />
            </PageLayout >
            : (emails.length > 0) ?
                <PageLayout>
                    <div className="review-page__content-wrapper">
                        <HeaderNavigation />
                        <PageTitle title="Review, edit, and decide" ><StepTag content="Step 3: Review" /></PageTitle>
                        <div className="review-page__emails-controls-wrapper">

                        </div>
                    </div>
                </PageLayout>
                : <PageLayout></PageLayout >
    );
}
export default ReviewPage;