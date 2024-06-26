import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, SidebarButton } from './styles';

const SideBar = ({ onSelectSection }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Container>
                <List>
                    <Link to="/protocolo"><SidebarButton>Protocolo</SidebarButton></Link>
                    <Link to="/treinos"><SidebarButton>Treino</SidebarButton></Link>
                    <Link to="/exercicios"><SidebarButton>Exercício</SidebarButton></Link>
                </List>
            </Container>
        </div>
    );
};

export default SideBar;