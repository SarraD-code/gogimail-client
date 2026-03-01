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

const WritePromptForm = ({ }) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const PORT = import.meta.env.VITE_PORT;
    const navigate = useNavigate();

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

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPrompt = {
            prompt: (formData.brief + "\nMake sure to include: " + formData.include + "\nMake sure to avoid: " + formData.avoid)
        };
        try {
            console.log(newPrompt);
            const res = await axios.post(`${BACKEND_URL}${PORT}/api/query`, newPrompt);
            console.log("DB response:", res);
            // Update local state
            // setInventory((prev) => [...prev, res.data.data]);
            // Navigate to inventory item details page
            // navigate(`/inventory/${res.data.data.id}`);
        }
        catch (error) {
            console.error("Error adding new prompt:", error);
        }
    };

    return (
        <form className="write-prompt-form__wrapper" onSubmit={handleSubmit}>
            <HeaderNavigation />
            <PageTitle title="Setup Your Content Request"><StepTag content="Step 1: Prompt" /></PageTitle>
            <div className="write-prompt-form__content-audience-wrapper">
                <ContentTypeSelector /> <AudienceSelector />
            </div>
            <PromptContext onChange={handleChange} values={formData} />
            <GenerateButton />
        </form>
    );
}
export default WritePromptForm;