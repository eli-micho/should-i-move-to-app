import React from 'react';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import {
  Box,
  Button,
  Grow,
  InputAdornment,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormInputs {
  searchInput: string;
}

interface ICity {
  name: string;
  population: number;
  walkScore?: number;
  carFreeIndex?: number;
  publicTransitScore?: number;
  bikeScore?: number;
  parkScore?: number;
  entrepreneurshipScore?: number;
  gOPVote?: number;
  sunshine?: number;
  sunnyHours?: number;
  clearDays?: number;
  daysYrWWet?: number;
  yearlyPrecipitation?: number;
}

const fakeNewYorkData: ICity = {
  name: 'New York',
  population: 8601186,
  walkScore: 89.2,
  carFreeIndex: 0.923,
  publicTransitScore: 84.3,
  bikeScore: 67.7,
  parkScore: 99,
  gOPVote: 33,
  sunshine: 58,
  sunnyHours: 2535,
  clearDays: 107,
  daysYrWWet: 122,
  yearlyPrecipitation: 49.9,
};

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
  const [someBoolean, setSomeBoolean] = React.useState<boolean>(false);
  const [cityInformation, setCityInformation] = React.useState<
    ICity | undefined
  >();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    setCityInformation(fakeNewYorkData);

  const cityKeys = React.useMemo(
    () => cityInformation && Object.keys(cityInformation),
    [cityInformation]
  );

  const isCitySelected = React.useMemo(
    () => cityKeys && cityKeys?.length > 0,
    [cityKeys]
  );

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
      {!isCitySelected && (
        <>
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
        </>
      )}

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('searchInput', { required: true })}
          name="searchInput"
          label="Where do you want to move to?"
          placeholder="City"
          onChange={(e) => setSearchValue(e.target.value)}
          variant="standard"
          fullWidth
          sx={{
            marginTop: '100px',
            ...(isCitySelected && {
              position: 'fixed',
              top: '-99px',
              transition: '1s all ease',
              WebkitTransition: '1s all ease',
              MozTransition: '1s all ease',
            }),
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
        {!isCitySelected && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              paddingTop: (theme) => theme.spacing(3),
            }}
          >
            <Button
              endIcon={<ArrowRightAltRoundedIcon />}
              variant="outlined"
              sx={{ textTransform: 'capitalize' }}
              size="small"
              type="submit"
            >
              Search
            </Button>
          </Box>
        )}
      </Box>

      {isCitySelected && (
        <Grow in={isCitySelected}>
          <Paper
            elevation={1}
            sx={{
              marginTop: (theme) => theme.spacing(8),
              padding: (theme) => `0 ${theme.spacing(2)}`,
            }}
          >
            <List
              sx={{
                '& li:last-child': {
                  borderBottom: '0',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                divider
              >
                <Typography variant="body2">Population</Typography>
                <Typography variant="body2">3,123,378</Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                divider
              >
                <Typography variant="body2">Population</Typography>
                <Typography variant="body2">3,123,378</Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                divider
              >
                <Typography variant="body2">Population</Typography>
                <Typography variant="body2">3,123,378</Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                divider
              >
                <Typography variant="body2">Population</Typography>
                <Typography variant="body2">3,123,378</Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                divider
              >
                <Typography variant="body2">Population</Typography>
                <Typography variant="body2">3,123,378</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grow>
      )}
    </Box>
  );
};

export default HomePage;
