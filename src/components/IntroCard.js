import React, { useState } from 'react';
import Badge from './Badge';
import Icon from './Icon';

const IntroCard = () => {

  const userName = "Arthur Belmont";
  const baseWord = "Hello";

  const [displayWord, setDisplayWord] = useState(baseWord);

  return (
    <div className="card">
      <Badge word={displayWord} />
      <h1>I'm {userName}</h1>

      <p className="top-border">Interested in Front and Back-end. Passionate about technologies, games, nature, learning and teaching a little bit about a lot of things.</p>
      <p className="top-border">Niterói, Rio de Janeiro, Brazil</p>
      <p className="top-border">Find me on:</p>

      <p>
        <Icon name="github"
          link="https://github.com/ArthurBelmont"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />

        <Icon name="twitter"
          link="https://twitter.com/ArthurBelmont4"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />

        <Icon name="instagram"
          link="https://www.instagram.com/arthur_belmont22/"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />
      </p>
    </div>
  )

};

export default IntroCard;