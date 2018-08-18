import React from 'react';
import e2e from '~data/e2e';

import './ProcessingScreen.css';

const ProcessingScreen = () => (
  <div
    id={e2e.PROCESSING_SCREEN_ID}
    className="processingScreen"
  >
    <span className="processingScreenText">
processing...
    </span>
  </div>
);

export default ProcessingScreen;
