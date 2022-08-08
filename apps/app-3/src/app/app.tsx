import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import './app.scss';
import { Header } from '@monorepo-shatel/app3/ui-shared';
import { formatRating } from '@monorepo-shatel/app3/utils-formatter';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Game } from '@monorepo-shatel/api/util-interfaces';

// import { FeatureGameDetail } from '@monorepo-shatel/feature-game-detail';

export function App() {
  const navigate = useNavigate();
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
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
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="games-layout">
        {state.loadingState === 'loading'
            ? 'Loading...'
            : state.loadingState === 'error'
            ? '<div>Error retrieving data</div>'
            : state.data.map((x) => (
                <Card
                  key={x.id}
                  className="game-card"
                >
                  <CardActionArea>
                    <CardMedia
                      className="game-card-media"
                      image={x.image}
                      title={x.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {x.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="game-rating"
                      >
                        <strong>Rating:</strong> {formatRating(x.rating)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
        </div>
      </div>
      {/*<Route path="/game/:id" element={<FeatureGameDetail />} />*/}
    </>
  );
}

export default App;
