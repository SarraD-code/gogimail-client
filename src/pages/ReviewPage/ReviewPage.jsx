import "./ReviewPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import PageTitle from "../../components/PageTitle/PageTitle";
import StepTag from "../../components/StepTag/StepTag";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import EmailEditor from "../../components/EmailEditor/EmailEditor";
import AIScoring from "../../components/AIScoring/AIScoring";
import SuggestionsButton from "../../components/customButtons/SuggestionsButton/SuggestionsButton";
import ActionButton from "../../components/customButtons/ActionButton/ActionButton";
import checkIcon from "../../assets/icons/check.png";
import xIcon from "../../assets/icons/X.png";

const ReviewPage = ({ emails }) => {
    const { id } = useParams();
    const [isLodaing, setIsLoading] = useState(true);
    // const [email, setEmail] = useState(null);
    const scores = [
        { label: "Brand", value: 100 },
        { label: "Factual", value: 80 },
        { label: "Compliance", value: 100 },
        { label: "Clarity", value: 80 }
    ];

    useEffect(() => {
        if (emails.length > 0) {
            setIsLoading(false);
        }
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
                            <EmailEditor email={emails.find(email => email.id == id)} />
                            <div className="review-page__controls-wrapper">
                                <div className="review-page__scoring-suggestions-wrapper">
                                    <AIScoring scores={scores} />
                                    <SuggestionsButton />
                                </div>
                                <div className="review-page__action-buttons-wrapper">
                                    <ActionButton label="APPROVE DIRECTLY" icon={checkIcon} variant="approve-direct" />
                                    <ActionButton label="APPROVE WITH EDITS" variant="approve-edits" />
                                    <ActionButton label="SEND FOR REGEN" icon={xIcon} variant="send-regen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </PageLayout>
                : <PageLayout></PageLayout >
    );
}
export default ReviewPage;