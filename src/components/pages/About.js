// About.js
/*
import React from 'react';
import MultipleBread from '../../assets/banner.avif';
import '../../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${MultipleBread})`}}>
        <h1>About Us</h1>
      </div>

      <div className='aboutBottom'>
        <div className='contentContainer'>
          
          <p>

At Paulina and Family Bakery Ltd, we take pride in crafting artisanal baked goods with a touch of love and a dash of tradition. Located in the heart of Manchester, UK, on Lord North Street, our bakery stands as a beacon of quality, taste, and warmth in the community.

<h2>Our Story</h2>
Founded by Paulina and her family, our bakery has been a cherished part of the local culinary landscape for over a decade. What began as a humble passion for baking at home has blossomed into a thriving business dedicated to delivering exceptional treats to our customers.

<h2>Our Philosophy</h2>
At Paulina and Family Bakery Ltd, we believe in the transformative power of baked goods. Beyond nourishing the body, our creations aim to uplift spirits and create lasting memories. We uphold the values of tradition, craftsmanship, and hospitality in every loaf of bread, every pastry, and every cake we bake.

<h2>Our Craftsmanship </h2>
Led by our talented bakers, each member of our team brings a unique set of skills and expertise to the table. From artisan bread to delicate pastries, we pour our hearts and souls into every creation, ensuring that each bite is a moment of pure delight.

<h2>Our Products </h2>
Our bakery offers a wide range of delectable treats to suit every taste and occasion. Whether you're craving the comforting aroma of freshly baked bread or the indulgent sweetness of a decadent cake, we have something for everyone. From classic favorites to innovative delights, our menu reflects our commitment to quality and creativity.

<h2> Community Engagement</h2>
Beyond our bakery walls, we are deeply committed to giving back to the community that has supported us throughout the years. Through partnerships with local charities, events, and initiatives, we strive to make a positive impact and spread joy far beyond our delicious treats.

<h2>Visit Us</h2>
We invite you to visit our bakery on Lord North Street in Manchester and experience the magic of Paulina and Family Bakery Ltd firsthand. Whether you're stopping by for your morning coffee and croissant or planning a special celebration, we look forward to welcoming you with open arms and tantalizing treats.

At Paulina and Family Bakery Ltd, baking isn't just our profession—it's our passion. Join us on a journey of flavor, tradition, and community as we continue to spread happiness, one baked good at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
*/
      
// About.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system
import MultipleBread from '../../assets/banner.avif';
import '../../styles/About.css';

const AboutTop = styled('div')({
  backgroundImage: `url(${MultipleBread})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '64px 0', // Adjust padding as needed
  textAlign: 'center',
});

const AboutBottom = styled('div')({
  padding: '48px 0', // Adjust padding as needed
});

const ContentContainer = styled(Container)({
  maxWidth: 800,
  margin: '0 auto',
});

function About() {
  return (
    <div className='about'>
      <AboutTop>
        <Typography variant="h2" gutterBottom>About Us</Typography>
      </AboutTop>

      <AboutBottom>
        <ContentContainer>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom></Typography>
              <Typography variant="body1">
               
At Paulina and Family Bakery Ltd, we take pride in crafting artisanal baked goods with a touch of love and a dash of tradition.
 Located in the heart of Manchester, UK, on Lord North Street, our bakery stands as a beacon of quality, taste, and warmth in the community.
              </Typography>
            </Grid>
           
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Our Story</Typography>
              <Typography variant="body2">
   

Founded by Paulina and her family, our bakery has been a cherished part of the local culinary landscape for over a decade.
 What began as a humble passion for baking at home has blossomed into a thriving business dedicated to delivering exceptional treats to our customers.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Our Philosophy</Typography>
              <Typography variant="body3">
At Paulina and Family Bakery Ltd, we believe in the transformative power of baked goods. Beyond nourishing the body, our creations aim to uplift spirits and create lasting memories. 
We uphold the values of tradition, craftsmanship, and hospitality in every loaf of bread, every pastry, and every cake we bake.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Our Craftsmanship </Typography>
              <Typography variant="body1">
            
Led by our talented bakers, each member of our team brings a unique set of skills and expertise to the table. 
From artisan bread to delicate pastries, we pour our hearts and souls into every creation, ensuring that each bite is a moment of pure delight.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Our Products</Typography>
              <Typography variant="body1">
Our bakery offers a wide range of delectable treats to suit every taste and occasion. Whether you're craving the comforting aroma of freshly baked bread or the indulgent sweetness of a decadent cake, we have something for everyone. 
From classic favorites to innovative delights, our menu reflects our commitment to quality and creativity.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom> Community Engagement</Typography>
              <Typography variant="body1">
              
Beyond our bakery walls, we are deeply committed to giving back to the community that has supported us throughout the years. 
Through partnerships with local charities, events, and initiatives, we strive to make a positive impact and spread joy far beyond our delicious treats.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Visit Us</Typography>
              <Typography variant="body1">
            
We invite you to visit our bakery on Lord North Street in Manchester and experience the magic of Paulina and Family Bakery Ltd firsthand. Whether you're stopping by for your morning coffee and croissant or planning a special celebration, we look forward to welcoming you with open arms and tantalizing treats.

At Paulina and Family Bakery Ltd, baking isn't just our profession—it's our passion.
 Join us on a journey of flavor, tradition, and community as we continue to spread happiness, one baked good at a time.
              </Typography>
            </Grid>


          </Grid>
        </ContentContainer>
      </AboutBottom>
    </div>
  )
}

export default About;
