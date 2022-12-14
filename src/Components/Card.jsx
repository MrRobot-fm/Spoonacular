import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SingleCard = ({
  title,
  image,
  summary,
  id,
  index,
  kitchen,
  recipe,
  baking,
  diet
}) => {
  const createSummary = () => {
    return {
      __html: `${summary.substring(0, 170)}... `
    };
  };

  const recipes = recipe.map(item => {
    return item?.step;
  });

  const ingredients = recipe.map(item => {
    return item?.ingredients.map(item => {
      return item?.name;
    });
  });

  const cardVariants = {
    offscreen: {
      x: 200,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={cardVariants}>
        <Card
          index={index}
          sx={{
            borderRadius: '8%'
          }}
          className="max-w-[280px] max-h-[480px] shadow-lg rounded-[100rem] m-10"
        >
          <CardMedia component="img" alt="food" height="140" image={image} />
          <CardContent className="mb-2">
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              className="font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              dangerouslySetInnerHTML={createSummary()}
              className="h-[6rem]"
            ></Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="outlined"
              color="success"
              size="small"
              sx={{
                marginBottom: '0.5rem',
                marginLeft: '0.3rem'
              }}
            >
              <Link
                to={`/recipes/${id}`}
                state={{
                  title: title,
                  summary: summary,
                  image: image,
                  kitchen: kitchen,
                  recipe: recipes,
                  baking: baking,
                  diet: diet,
                  ingredients: ingredients
                }}
              >
                Learn more
              </Link>
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SingleCard;
