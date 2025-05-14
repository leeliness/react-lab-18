import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaJs, FaReact, FaGithub } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  background-color: #fefefe;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  color: #3A0519;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 1.5rem 0 0.5rem;
  color: #FAD59A;

  svg {
    margin-right: 0.5rem;
  }
`;

const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  color: #3A0519;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
    color: #222;
  }

  svg {
    margin-right: 0.4rem;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <Section>
        <Title>Про мене</Title>
        <p>Привіт! Мене звати Аліна і я початкова розробниця, яка захоплюється створенням вебзастосунків. Люблю вчитись, експериментувати з технологіями та перетворювати ідеї на код.</p>
        <p>Мені подобається розвиватися у сфері фронтенду, особливо працювати з React. У вільний час люблю слухати музику, малювати або вивчати нові інструменти для розробки.</p>
      </Section>

      <Section>
        <Title>Мої проєкти</Title>

        <ProjectTitle><FaHtml5 /> HTML + CSS</ProjectTitle>
        <RepoLink href="https://github.com/leeliness/css-pratice.git" target="_blank">
          <FaGithub /> Проєкт 1
        </RepoLink>
        <RepoLink href="https://github.com/leeliness/html-css-landing.git" target="_blank">
          <FaGithub /> Проєкт 2
        </RepoLink>

        <ProjectTitle><FaJs /> JavaScript</ProjectTitle>
        <RepoLink href="https://github.com/leeliness/js-easy.git" target="_blank">
          <FaGithub /> JS-проєкт 1
        </RepoLink>
        <RepoLink href="https://github.com/leeliness/js-array.git" target="_blank">
          <FaGithub /> JS-проєкт 2
        </RepoLink>

        <ProjectTitle><FaReact /> React</ProjectTitle>
        <RepoLink href="https://github.com/leeliness/react-lab-11.git" target="_blank">
          <FaGithub /> React-проєкт 1
        </RepoLink>
        <RepoLink href="https://github.com/leeliness/react-lab-13.git" target="_blank">
          <FaGithub /> React-проєкт 2
        </RepoLink>
      </Section>
    </Container>
  );
};

export default AboutMe;
