import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/gym_name.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#0E1111">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography color=" #FBFAF3" variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">&#169; Copyright Keval Hadiyal</Typography>
  </Box>
);

export default Footer;