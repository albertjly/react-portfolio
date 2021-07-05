import React from 'react';

function Resume() {
  return (
    <div>
      <h2 className="my-1"><a href="/files/resume.jpg">Here</a> is my resume</h2>
      <h2>Front-end Proficiencies</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Sass</li>
      </ol>
      <h2>Back-end Proficiencies</h2>
      <ol>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ol>
    </div>
  )
};

export default Resume;