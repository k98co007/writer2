import React, {useState} from 'react';
import InitialEvaluationWriting from './InitialEvaluatoinWriting';

const Home: React.FC = () => {
  const [signature, setSignature] = useState('');

  const handleButtonClick = () => {
    setSignature('test');
  };

  return (
    <div className='Home'>
        { signature === '' ? 
          (<div className='btnWriteNow' onClick={handleButtonClick}>Write Now</div>) : 
          (<InitialEvaluationWriting/>) }
    </div>
  );
};

export default Home;