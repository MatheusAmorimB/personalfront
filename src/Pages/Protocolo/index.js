import React, { useState } from 'react';
import SideBar from "../../Components/SideBar";
import TitleSearch from "../../Components/TitleSearch";
import UserProfile from "../../Components/UserProfile";
import { Container, SecondContainer } from "./styles";
import Treinos from "../Treino";
import { useNavigate } from 'react-router-dom';

const Protocolo = () => {
    const [activeSection, setActiveSection] = useState("protocolo");
    const navigate = useNavigate();

    const handleSelectSection = (section) => {
        setActiveSection(section);
        navigate.push(`/${section}`);
    };

    let sectionContent;
    if (activeSection === "protocolo") {
        sectionContent = <h1>Lista de Protocolo</h1>;
    } else if (activeSection === "treinos") {
        sectionContent = <Treinos />;
    } else if (activeSection === "exercicios") {
        sectionContent = <h1>Lista de Exercícios</h1>;
    }

    return (
        <section>
            <UserProfile />
            <SideBar onSelectSection={handleSelectSection} />
            <Container>
                <TitleSearch title="Protocolo" />
                <SecondContainer>
                    {sectionContent}
                </SecondContainer>
            </Container>
        </section>
    );
}

export default Protocolo;

