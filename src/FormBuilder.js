// src/FormBuilder.js

import React, { useState } from 'react';

const FormBuilder = () => {
  const [formTitle, setFormTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleFormTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: 'text', question: '', options: [] }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Form Builder</h1>
      <div className="mb-4">
        <label htmlFor="formTitle" className="block font-bold mb-2">
          Form Title
        </label>
        <input
          type="text"
          id="formTitle"
          className="w-full border p-2"
          value={formTitle}
          onChange={handleFormTitleChange}
        />
      </div>

      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`question-${index}`} className="block font-bold mb-2">
            Question {index + 1}
          </label>
          <input
            type="text"
            id={`question-${index}`}
            className="w-full border p-2"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
          />

          {/* Add more code here to handle different question types and options */}
        </div>
      ))}
    </div>
  );
};

export default FormBuilder;
