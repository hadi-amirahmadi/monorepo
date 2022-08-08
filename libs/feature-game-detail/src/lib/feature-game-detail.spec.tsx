import { render } from '@testing-library/react';

import FeatureGameDetail from './feature-game-detail';

describe('FeatureGameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
