import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import style from './app.module.scss';
import { getAllGames } from '../fake-api';
import {Header} from "@monorepo-shatel/app3/ui-shared";

export function App() {
  return (
    <>
      <Header />
      <div className={style['container']}>
        <div className={style['games-layout']}>
          {getAllGames().map((x) => (
            <Card key={x.id} className={style['game-card']}>
              <CardActionArea>
                <CardMedia
                  className={style['game-card-media']}
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={style['game-rating']}
                  >
                    <strong>Rating:</strong> {x.rating}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
