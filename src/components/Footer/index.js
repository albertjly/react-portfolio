import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="my-1">
        <h4>Email:</h4>
        <a href="mailto:albertjly@gmail.com">albertjly@gmail.com</a>
      </div>
      <div className="my-1">
        <h4>GitHub:</h4>
        <a href="https://github.com/albertjly" target="_blank" rel="noreferrer">Albert Jiang's GitHub</a>
      </div>
      <div className="my-1">
        <h4>Other Portfolio:</h4>
        <a href="https://www.albertjiang.com/" target="_blank" rel="noreferrer">Videos, Photographs, and Graphic Design</a>
      </div>
    </div>
  )
};

export default Footer;