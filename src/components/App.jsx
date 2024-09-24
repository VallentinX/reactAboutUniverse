import { useState } from 'react';
import questionsDB from '../db/db';
import Accordion from './Accordion/Accordion.jsx';

function App() {
  const questions = [...questionsDB];
  const [isOpen, setIsOpen] = useState(null);

  const handleAnswer = function (id) {
    setIsOpen(isOpen !== id ? id : null);
  };

  return (
    <div className='accordion'>
      {questions.map(questionObj => (
        <Accordion
          key={questionObj.id}
          questionObj={questionObj}
          isOpen={isOpen}
          onHandleAnswer={handleAnswer}
        />
      ))}
    </div>
  );
}

export default App;
