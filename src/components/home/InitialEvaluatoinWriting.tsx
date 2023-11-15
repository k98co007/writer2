import React, {useEffect, useState} from 'react';

const InitialEvaluationWriting: React.FC = () => {
    const [title, setTitle] = useState('Hare and tortoise fairy tale story');
    const [final, setFinal] = useState('');
    const [signature, setSignature] = useState('');
    const [secretKeyword, setSecretKeyword] = useState('');
    const [textAreaDisabled, setDisabled] = useState(false);

    const MINUTES_IN_MS = 1 * 60 * 1000;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - (final.length > 0?INTERVAL:0));    
        }, INTERVAL);

        if (timeLeft <= 0) {
            clearInterval(timer);
            setDisabled(true);
        }

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft, final]);

  
    const handleFinalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFinal(event.target.value);
    };

    const handleSignatureChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSignature(event.target.value);
    };

    const handleSecretKeywordChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSecretKeyword(event.target.value);
    };

    const handleClick = () => {
      const data = { title, final };

      fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    };

    return (
      <div className='InitialEvaluationWrite'>
          <b>Initial Evaluation Writing</b><br/>
          Write breif fairy tale story as you know. Fill over 10 lines. amount 400 characters. You have 10 minutes !! <br/>
          <h5>Tip : Think a setting, character, event and result.     Be a good writer today. Good luck !</h5>
          
          <div className='timeDisplay'>
            Time : {minutes} : {second}
          </div>

          <label>Title</label>
          <textarea className='Title1line'
            disabled
            value={title}
          />
          <span className='CharacterCounter'>{`${title.length}/40`}</span>

          <label>Final</label>
          <textarea className='Final'
            value={final}
            onChange={handleFinalChange}
            maxLength={800}
            disabled = {textAreaDisabled}
          />
          <span className='CharacterCounter'>{`${final.length}/800`}</span>

          <label>Signature</label>
          <textarea className='Signature'
            value={signature}
            onChange={handleSignatureChange}
            maxLength={12}
          />

          <label>Secret keyword</label>
          <textarea className='SecretKeyword'
            value={secretKeyword}
            onChange={handleSecretKeywordChange}
            maxLength={12}
          />

          <div className='btnSubmit' onClick={handleClick}>Submit</div>          
      </div>
    );
};

export default InitialEvaluationWriting;