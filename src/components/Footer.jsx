import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #F3D0D7;
  color: #222;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 3px solid #FFEFEF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #222;
`;

const IconLink = styled.a`
  color: #222;
  margin: 0 0.5rem;
  font-size: 1.6rem;
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    color: #BE3D2A; 
    transform: scale(1.1);
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>Звʼяжіться зі мною:</FooterText>
    <IconLink href="https://github.com/leeliness" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </IconLink>
    <IconLink href="https://instagram.com/__al.inaaa_" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </IconLink>
  </FooterContainer>
);

export default Footer;
