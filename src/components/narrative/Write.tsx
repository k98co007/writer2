import React, {useEffect, useState} from 'react';

const Write: React.FC = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [draft, setDraft] = useState('');
    const [final, setFinal] = useState('');

    const [textAreaDisabled, setDisabled] = useState(false);

    const MINUTES_IN_MS = 1 * 60 * 1000;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    useEffect(() => {
        const timer = setInterval(() => {
          const len = title.length + summary.length + draft.length + final.length;
          setTimeLeft((prevTime) => prevTime - (len > 0?INTERVAL:0));
        }, INTERVAL);

        if (timeLeft <= 0) {
            clearInterval(timer);
            setDisabled(true);
        }

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft,title,summary,draft,final]);

    const [titleLenColor, setTitleLenColor] = useState({ color: "black" });
    const [summaryLenColor, setSummaryLenColor] = useState({ color: "black" });
    const [draftLenColor, setDraftLenColor] = useState({ color: "black" });
    const [finalLenColor, setFinalLenColor] = useState({ color: "black" });
  
    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.target.value);
      if( title.length < 10)
        setTitleLenColor({ color: "red" });
      else
        setTitleLenColor({ color: "black" });
    };
  
    const handleSummaryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSummary(event.target.value);
      if( summary.length < 60)
        setSummaryLenColor({ color: "red" });
      else
        setSummaryLenColor({ color: "black" });
    };
  
    const handleDraftChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDraft(event.target.value);
      if( draft.length < 200)
        setDraftLenColor({ color: "red" });
      else
        setDraftLenColor({ color: "black" });
    };
  
    const handleFinalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFinal(event.target.value);
      if( final.length < 400)
        setFinalLenColor({ color: "red" });
      else
        setFinalLenColor({ color: "black" });
    };

    const handleClick = () => {
      const data = { title, summary, draft, final };

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
      <div className='Write'>
          <div className='WriteHeader'>
            <b>Your work</b>      
            <div className='WriteTimeDisplay'>
              Time : {minutes} : {second}
            </div>
          </div>
          <label>Title</label>
          <textarea className='Title1line'
            value={title}
            onChange={handleTitleChange}
            maxLength={40}
            disabled = {textAreaDisabled}
          />
          <span className='CharacterCounter'><span style={titleLenColor}>{`${title.length}`}</span>/40</span>

     
          <label>Summary</label>
          <textarea className='Summary'
            value={summary}
            onChange={handleSummaryChange}
            maxLength={120}
            disabled = {textAreaDisabled}
          />
          <span className='CharacterCounter'><span style={summaryLenColor}>{`${summary.length}`}</span>/120</span>
     
          <label>Draft</label>
          <textarea className='Draft'
            value={draft}
            onChange={handleDraftChange}
            maxLength={400}
            disabled = {textAreaDisabled}
          />
          <span className='CharacterCounter'><span style={draftLenColor}>{`${draft.length}`}</span>/400</span>
       
          <label>Final</label>
          <textarea className='Final'
            value={final}
            onChange={handleFinalChange}
            maxLength={800}
            disabled = {textAreaDisabled}
          />
          <span className='CharacterCounter'><span style={finalLenColor}>{`${final.length}`}</span>/800</span>

          <div className='btnSubmit' onClick={handleClick}>Submit</div>          

      </div>
    );
};

export default Write;