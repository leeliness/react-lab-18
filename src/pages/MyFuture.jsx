import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h2`
  color: #3A0519;
  margin-bottom: 1rem;
`;

const Step = styled.div`
  background: #FAD59A;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const DreamJob = styled.div`
  background: #fce4ec;
  padding: 1.2rem;
  border-radius: 12px;
  margin-top: 2rem;
`;

const MyFuture = () => {
  return (
    <Container>
      <Title>Мій розвиток</Title>

      <Step>
        <h3>1. Завершити навчання та створити власне портфоліо</h3>
        <p>Завершити курси, зробити кілька власних проєктів і викласти їх на GitHub.</p>
      </Step>

      <Step>
        <h3>2. Отримати перше місце в ІТ-компанії</h3>
        <p>Знайти стажування або junior-позицію, щоб здобути досвід і вчитись від команди.</p>
      </Step>

      <DreamJob>
        <h3>💼 Робота мрії</h3>
        <p>Хочу працювати у дружній команді, яка розробляє корисні вебзастосунки, з можливістю рости та розвиватись щодня.</p>
      </DreamJob>
    </Container>
  );
};

export default MyFuture;
