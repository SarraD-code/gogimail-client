import "./WritePromptPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import StepTag from "../../components/StepTag/StepTag";
import ContentTypeSelector from "../../components/ContentTypeSelector/ContentTypeSelector";
import AudienceSelector from "../../components/AudienceSelector/AudienceSelector";
import PromptContext from "../../components/PromptContext/PromptContext";
import GenerateButton from "../../components/customButtons/GenerateButton/GenerateButton";

const WritePromptPage = ({ }) => {
    return (
        <form className="write-prompt-page__wrapper">
            <PageTitle title="Setup Your Content Request"><StepTag content="Step 1: Prompt" /></PageTitle>
            <div className="write-prompt-page__content-audience-wrapper">
                <ContentTypeSelector /> <AudienceSelector />
            </div>
            <PromptContext />
            <GenerateButton />
        </form>
    );
}
export default WritePromptPage;