import React, {useState} from 'react';

const Sample: React.FC = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [draft, setDraft] = useState('');
    const [final, setFinal] = useState('');
  
    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.target.value);
    };
  
    const handleSummaryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSummary(event.target.value);
    };
  
    const handleDraftChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDraft(event.target.value);
    };
  
    const handleFinalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFinal(event.target.value);
      };
    
      const handleReadClick = () => {
        fetch('http://localhost:3001/read')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('title:', data.title);
            console.log('summary:', data.summary);
            console.log('draft:', data.draft);
            console.log('final:', data.final);
            
            setTitle(data.title);
            setSummary(data.summary);
            setDraft(data.draft);
  
            if( data.final != null)
              setFinal(data.final);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      
    return (
      <div className='Sample'>
          <div className='SampleHeader'>
          <b>Other's Sample</b>          
          <b onClick={handleReadClick}>Next &gt;&gt;</b>
          </div>
          
          <label>Title</label>
          <textarea className='Title1line'
            disabled
            value={title}
            onChange={handleTitleChange}
            maxLength={40}
          />
          <span className='CharacterCounter'>{`${title.length}/40`}</span>

     
          <label>Summary</label>
          <textarea className='Summary'
            disabled
            value={summary}
            onChange={handleSummaryChange}
            maxLength={120}
          />
          <span className='CharacterCounter'>{`${summary.length}/120`}</span>
     
        
          <label>Draft</label>
          <textarea className='Draft'
            disabled
            value={draft}
            onChange={handleDraftChange}
            maxLength={400}
          />
          <span className='CharacterCounter'>{`${draft.length}/400`}</span>
       
          <label>Final</label>
          <textarea className='Final'
            disabled
            value={final}
            onChange={handleFinalChange}
            maxLength={800}
          />
          <span className='CharacterCounter'>{`${final.length}/800`}</span>
      </div>
    );
};

export default Sample;