import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import selectors from '~renderer/state/selectors';
import { AboutHero } from '~renderer/ui/DonatePage/view/AboutHero';

interface IStateProps {
  hasNewReleaseCard: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
): IStateProps => ({
  hasNewReleaseCard: !!selectors.getNewRelease(state)
});

export const AboutHeroConnected: React.ComponentClass = (
  connect<IStateProps>(mapStateToProps)(AboutHero)
);
