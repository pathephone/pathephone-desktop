import React from 'react';

import './ParagraphScreen.css';

interface IProps {
  title: string;
  paragraph?: string;
  id?: string;
}

export const ParagraphScreen: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <div
    id={props.id}
    className='paragraph-screen'
  >
    <div className='paragraph-screen__container'>
      {
        props.title && (
          <h4 className='paragraph-screen__title'>
            {props.title}
          </h4>
        )
      }
      {
        props.paragraph && (
          <p className='paragraph-screen__paragraph'>
            {props.paragraph}
          </p>
        )
      }
    </div>
  </div>
);
