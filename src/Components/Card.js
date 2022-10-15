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
  cucina,
  ricetta,
  cottura,
  dieta
}) => {
  const createSummary = () => {
    return {
      __html: `${summary.substring(0, 170)}... `
    };
  };

  const step1 = ricetta.map(item => {
    return item?.step;
  });

  const step2 = ricetta.map(item => {
    return item?.ingredients.map(item => {
      return item?.name;
    });
  });

  console.log(step2);

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
        duration: 1,
        delay: 0.4
      }
    }
  };

  return (
    <motion.div
      // initial={{ y: 300, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ type: 'spring', duration: 1.2, delay: 0.5, bounce: 0.3 }}
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.4 }}
      // transition={{
      //   type: 'spring',
      //   duration: 1,
      //   delay: 0.5,
      //   bounce: 0.3
      // }}
    >
      <motion.div variants={cardVariants}>
        <Card
          index={index}
          sx={{
            maxWidth: 280,
            maxHeight: 880,
            boxShadow: 14,
            borderRadius: '5%',
            margin: 5
          }}
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
                  cucina: cucina,
                  ricetta: step1,
                  cottura: cottura,
                  dieta: dieta,
                  ingredienti: step2
                }}
              >
                Learn more{' '}
              </Link>
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SingleCard;
