import "./Generate.scss";
import WritePromptForm from "../../components/WritePromptForm/WritePromptForm";
import PageLayout from "../../components/PageLayout/PageLayout";

const Generate = ({ }) => {
    console.log("Generate Page")
    return (
        <PageLayout>
            <WritePromptForm />
        </PageLayout>
    );
}
export default Generate;