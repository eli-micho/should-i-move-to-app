import React from 'react';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
type Props = {};

const listOfCities = [
  'Vancouver',
  'Toronto',
  'Montreal',
  'Calgary',
  'Victoria',
  'Seattle',
  'New York',
  'San Fransisco',
  'Austin',
  'Los Angeles',
  'Chicago',
];

const HomePage = (props: Props) => {
  const [city, setCity] = React.useState<string>(listOfCities[0]);
  const [searchValue, setSearchValue] = React.useState<string>('');

  React.useEffect(() => {
    const setNewCity = () =>
      setCity((prev) => {
        let ind = listOfCities.indexOf(prev);
        if (ind < listOfCities.length - 1) {
          ind += 1;
        } else if (ind === listOfCities.length - 1) {
          ind = 0;
        }
        return listOfCities[ind];
      });

    const interval = setInterval(() => {
      setNewCity();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{}}>
      <TravelExploreRoundedIcon
        fontSize="large"
        sx={{ position: 'absolute', top: 16, right: 24 }}
      />
      <Box
        sx={{
          display: 'flex',
          marginTop: '100px',
        }}
      >
        <Typography variant="h6">Should I move to</Typography>
        <Typography
          variant="h6"
          sx={{
            textDecoration: 'underline',
            textUnderlineOffset: 4,
          }}
        >
          &nbsp;{city} ?
        </Typography>
      </Box>
      <Typography variant="body2">
        Comparing cities all across North America
      </Typography>
      <TextField
        name="searchInput"
        label="Where do you want to move to?"
        placeholder="City"
        onChange={(e) => setSearchValue(e.target.value)}
        variant="standard"
        fullWidth
        sx={{
          marginTop: '100px',
        }}
        InputProps={{
          ...(searchValue && {
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }),
        }}
        value={searchValue}
      />
    </Box>
  );
};

export default HomePage;
