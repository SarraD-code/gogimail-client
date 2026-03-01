import "./WritePromptForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";
import StepTag from "../../components/StepTag/StepTag";
import ContentTypeSelector from "../../components/ContentTypeSelector/ContentTypeSelector";
import AudienceSelector from "../../components/AudienceSelector/AudienceSelector";
import PromptContext from "../../components/PromptContext/PromptContext";
import GenerateButton from "../../components/customButtons/GenerateButton/GenerateButton";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

const WritePromptForm = ({ setEmails }) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const PORT = import.meta.env.VITE_PORT;
    const navigate = useNavigate();
    const [isFormHidden, setIsFormHidden] = useState(false);
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
    const [isYellowVisible, setIsYellowVisible] = useState(false);
    const [isGreenVisible, setIsGreenVisible] = useState(false);
    const [isPurpleVisible, setIsPurpleVisible] = useState(false);
    const [isBlueVisible, setIsBlueVisible] = useState(false);
    const [isRedVisible, setIsRedVisible] = useState(false);

    // Set initial form data
    const [formData, setFormData] = useState({
        brief: '',
        include: '',
        avoid: ''
    });

    // Handle onChange of each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPrompt = {
            prompt: ("Write three emails with this prompt: " + formData.brief + "\nMake sure to include: " + formData.include + "\nMake sure to avoid: " + formData.avoid)
        };
        try {
            let ms = 500;
            console.log(newPrompt);
            setIsFormHidden(true);
            setIsTitleVisible(true);
            setIsSubtitleVisible(true);
            await delay(ms);
            setIsYellowVisible(true);
            await delay(ms);
            setIsGreenVisible(true);
            const res = await axios.post(`${BACKEND_URL}${PORT}/api/query`, newPrompt);
            setIsPurpleVisible(true);
            await delay(ms);
            setIsBlueVisible(true);
            await delay(ms);
            setIsRedVisible(true);
            console.log("DB response:", res.data.answer);

            // Regex with two capturing groups:
            // 1. ([^\r\n]+) captures the subject line until the end of the line
            // 2. ([\s\S]*?) captures the email body until "[Your Contact Information]"
            const regex = /Subject:\s*(.*?)\n+([\s\S]*?)\[Your Contact Information\]/gi;

            const parsedEmails = [];
            let match;
            let key = 1;

            while ((match = regex.exec(res.data.answer)) !== null) {
                parsedEmails.push({
                    subject: match[1].trim(),
                    body: match[2].trim(),
                    id: key
                });
                id++;
            }

            console.log(parsedEmails);

            // Update local state
            setEmails(parsedEmails);
            // Navigate to generated emails page
            navigate(`/generated-emails`);
        }
        catch (error) {
            console.error("Error adding new prompt:", error);
        }
    };

    return (
        <>
            <form className={`write-prompt-form__wrapper ${isFormHidden ? 'write-prompt-form__hidden' : ''}`} onSubmit={handleSubmit}>
                <HeaderNavigation />
                <PageTitle title="Setup Your Content Request"><StepTag content="Step 1: Prompt" /></PageTitle>
                <div className="write-prompt-form__content-audience-wrapper">
                    <ContentTypeSelector /> <AudienceSelector />
                </div>
                <PromptContext onChange={handleChange} values={formData} />
                <GenerateButton />
            </form>
            <div className={`generating-content ${isFormHidden ? 'generating-content__visible' : ''}`}>
                <p className={`generating-content__title ${isTitleVisible ? 'generating-content__visible' : ''}`}>Generating Content</p>
                <p className={`generating-content__subtitle ${isSubtitleVisible ? 'generating-content__visible' : ''}`}>Brand guidelines · RAG retrieval · Scoring</p>
                <p className={`generating-content__yellow ${isYellowVisible ? 'generating-content__visible' : ''}`}>· Pulling brand voice guidelines</p>
                <p className={`generating-content__green ${isGreenVisible ? 'generating-content__visible' : ''}`}>· Retrieving segment context from KB</p>
                <p className={`generating-content__purple ${isPurpleVisible ? 'generating-content__visible' : ''}`}>· Generating 3 content variants</p>
                <p className={`generating-content__blue ${isBlueVisible ? 'generating-content__visible' : ''}`}>· Scoring brand alignment & compliance</p>
                <p className={`generating-content__red ${isRedVisible ? 'generating-content__visible' : ''}`}>· Flagging risks & attaching metadata</p>
            </div>
        </>
    );
}
export default WritePromptForm;