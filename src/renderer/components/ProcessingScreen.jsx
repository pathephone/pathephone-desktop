import React from 'react';
import { ids } from '~data';

import './ProcessingScreen.css';

const ProcessingScreen = () => (
  <div
    id={ids.PROCESSING_SCREEN_ID}
    className="processingScreen"
  >
    <span className="processingScreenText">
processing...
    </span>
  </div>
);

export default ProcessingScreen;
