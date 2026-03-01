import "./ReviewPage.scss";
import { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import PageTitle from "../../components/PageTitle/PageTitle";
import StepTag from "../../components/StepTag/StepTag";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import VariantCard from "../../components/VariantCard/VariantCard";
import LinkButton from "../../components/LinkButton/LinkButton";

const ReviewPage = ({ emails }) => {
    const [isLodaing, setIsLoading] = useState(true);
    const [selectedEmail, setSelectedEmail] = useState(null);

    useEffect(() => {
        if (emails.length > 0)
            setIsLoading(false);
        else
            setTimeout(() => { setIsLoading(false); }, 5000);
    }, [emails]);

    useEffect(() => {
        console.log(selectedEmail);
    }, [selectedEmail]);

    const metrics1 = [
        { type: "positive", label: "Brand 94%" },
        { type: "positive", label: "Factual" },
        { type: "positive", label: "Compliant" }
    ];
    const metrics2 = [
        { type: "medium", label: "Brand 81%" },
        { type: "positive", label: "Factual" },
        { type: "medium", label: "Tone: neutral" }
    ];
    const metrics3 = [
        { type: "negative", label: "Brand 52%" },
        { type: "positive", label: "Factual" },
        { type: "negative", label: "Tone: biased" }
    ];

    return (
        isLodaing ?
            <PageLayout>
                <LoadingSpinner delay={5000} />
            </PageLayout >
            : (emails.length > 0) ?
                <PageLayout>
                    <div className="generated-emails-page__content-wrapper">
                        <HeaderNavigation />
                        <PageTitle title="Producing three variants" subtitle="Select a variant to review or let the reviewer decide" ><StepTag content="Step 2: Generate" /></PageTitle>
                        <div className="generated-emails-page__cards-Wrapper">
                            <VariantCard onClick={() => setSelectedEmail(emails[0].id)} email={emails[0]} metrics={metrics1} title="Variant A. Recommended" type="recommended" />
                            <VariantCard onClick={() => setSelectedEmail(emails[1].id)} email={emails[1]} metrics={metrics2} title="Variant B" />
                            <VariantCard onClick={() => setSelectedEmail(emails[2].id)} email={emails[2]} metrics={metrics3} title="Variant C" />
                        </div>
                        <div className="generated-emails-page__btn-Wrapper">
                            <LinkButton type="review" id={selectedEmail} />
                            <LinkButton type="back" />
                        </div>
                    </div>
                </PageLayout>
                : <PageLayout></PageLayout >
    );
}
export default ReviewPage;