import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../home/Home';
import Narrative from '../narrative/Narrative';
import Descriptive from '../descriptive/Descriptive';
import Informative from '../informative/Informative';
import Persuasive from '../persuasive/Persuasive';
import Procedural from '../procedural/Procedural';
import Opinion from '../opinion/Opinion';
import Literature from '../literature/Literature';
import Creative from '../creative/Creative';
import Journal from '../journal/Journal';
import Letter from '../letter/Letter';

const ContentArea: React.FC = () => {
  return(
    <main className='content-area'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Narrative" component={Narrative} />
            <Route path="/Descriptive" component={Descriptive} />
            <Route path="/Informative" component={Informative} />
            <Route path="/Persuasive" component={Persuasive} />
            <Route path="/Procedural" component={Procedural} />
            <Route path="/Opinion" component={Opinion} />
            <Route path="/Literature" component={Literature} />
            <Route path="/Creative" component={Creative} />
            <Route path="/Journal" component={Journal} />
            <Route path="/Letter" component={Letter} />
        </Switch>
    </main>
  );
};

export default ContentArea;