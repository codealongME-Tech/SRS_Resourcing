import React from 'react';
import MyImage from "./Images/Resourcing-services-1.png";
import { Button, Box, Typography, styled } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  width: '100%',
  backgroundImage: 'radial-gradient(circle at center, #004183 0%, #001f4c 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
}));

const Content = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const Image = styled('img')(({ theme }) => ({
  width: '50%',
  maxWidth: '500px',
  height: 'auto',
  marginTop: theme.spacing(2),
}));


const Home = () => {
  return (
    <Container>
      <Box style={{ display: 'flex',alignItems:'center', marginTop:'100px'  }}>
        <Content style={{width:'100%' }}>
          <Typography variant="h3" component="h1">
            S.R. Resourcing <br/> Private Limited
          </Typography>
          <Typography variant="subtitle1">
            Azalio – Your perfect strategic recruitment partner.
          </Typography>
          <Button
            variant="contained"
            aria-label="Click here for any query"
          >
            Query
          </Button>
        </Content>
        <div  style={{width:'100%' }}>
        <Image
          src={MyImage}
          alt="Resourcing services graphic"
        />
        </div>
      </Box>
    </Container>
  );
};

export default Home;
