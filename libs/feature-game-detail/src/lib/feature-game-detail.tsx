import styles from './feature-game-detail.module.css';

/* eslint-disable-next-line */
export interface FeatureGameDetailProps {}

export function FeatureGameDetail(props: FeatureGameDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureGameDetail!</h1>
    </div>
  );
}

export default FeatureGameDetail;
