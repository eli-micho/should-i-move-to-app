import { Box, Link, Typography } from '@mui/material';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.grey[500],
        width: '100%',
        textAlign: 'center',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.common.black,
      })}
    >
      <Typography variant="caption">Made by:&nbsp;</Typography>
      <Link href="#">Elijah Micho</Link>
    </Box>
  );
};

export default Footer;
