import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import './app.module.css';
import { getAllGames } from '../fake-api';

export function App() {
  return (
    <div className="container">
      <div className="games-layout">
        {getAllGames().map((x) => (
          <Card key={x.id} className="game-card">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {x.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="game-rating"
                >
                  <strong>Rating:</strong> {x.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
