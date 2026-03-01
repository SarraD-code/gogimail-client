import "./Generate.scss";
import WritePromptForm from "../../components/WritePromptForm/WritePromptForm";
import PageLayout from "../../components/PageLayout/PageLayout";

const Generate = ({ setEmails }) => {
    return (
        <PageLayout>
            <WritePromptForm setEmails={setEmails} />
        </PageLayout>
    );
}
export default Generate;