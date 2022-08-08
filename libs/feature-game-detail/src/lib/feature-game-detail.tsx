import React, { useState, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';
import { Card, Typography, CardActionArea, CardContent} from '@mui/material';
import './store-feature-game-detail.scss';
type TParams = { id: string };

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps
  extends RouteComponentProps<TParams> {}

export const StoreFeatureGameDetail = (props: StoreFeatureGameDetailProps) => {
  const [state, setState] = useState<{
    data: any;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: {},
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const gameId = props.match.params.id;
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [props.match.params.id]);

  return (
    <div className="container">
      {state.loadingState === 'loading' ? (
        'Loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default StoreFeatureGameDetail;
Footer
© 2022 GitHub, Inc.