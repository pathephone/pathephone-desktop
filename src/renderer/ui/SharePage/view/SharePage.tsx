import React from 'react';

import ProcessingScreen from '~components/ProcessingScreen';
import { PageContainer } from '~renderer/components/PageContainer';
import { ShareDropZone } from '~renderer/ui/SharePage/view/SharePage/ShareDropZone';
import { ShareFormConnected } from '~renderer/ui/SharePage/view/SharePage/ShareFormConnected';
import e2e from '~shared/data/e2e';

interface IProps {
  hasProcessingScreen: boolean;
  hasEditForm: boolean;
  onFilesSelect(f: FileList): void;
}

export const SharePage: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => {
  const { hasProcessingScreen, hasEditForm, ...restProps } = props;

  return (
    <PageContainer id={e2e.SHARE_PAGE_ID}>
      {
        hasProcessingScreen ? (
          <ProcessingScreen />
        ) : hasEditForm ? (
          <ShareFormConnected />
        ) : (
          <ShareDropZone {...restProps} />
        )
      }
    </PageContainer>
  );
};
