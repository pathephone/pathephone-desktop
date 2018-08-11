import React from 'react';
import { E2E_PROCESSING_SCREEN_ID } from '~data/e2eConstants';

import './ProcessingScreen.css';

const ProcessingScreen = () => (
  <div
    id={E2E_PROCESSING_SCREEN_ID}
    className="processingScreen"
  >
    <span className="processingScreenText">
processing...
    </span>
  </div>
);

export default ProcessingScreen;
