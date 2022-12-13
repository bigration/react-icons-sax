import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import * as Lib from '@bigration/react-iconsax';
import { FixedSizeGrid as Grid } from 'react-window';
import { Stack, Theme, useMediaQuery } from '@mui/material';
import { TwitterPicker } from 'react-color';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { IconDialog } from './IconDialog';

export default function Content() {
  const S = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const M = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [control, setControl] = React.useState<{
    color: string;
    size: number;
    folder: string;
  }>({ color: '#9900EF', size: 32, folder: 'outline' });

  const grid = {
    cols: 0,
  };

  if (M) {
    grid.cols = 7;
  } else if (S) {
    grid.cols = 5;
  } else {
    grid.cols = 4;
  }

  const columnWidth = 100;

  const colorChange = (color) => {
    setControl({ ...control, color: color.hex });
  };

  const handleSizeChange = (event: Event, newValue: number | number[]) => {
    setControl({
      ...control,
      size: !newValue ? 24 : Number(newValue as number),
    });
  };

  const handleFolderChange = (event: SelectChangeEvent) => {
    setControl({ ...control, folder: event.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          React Iconsax
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          gap={4}
          alignItems="center"
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="folder-select-label">Icon type</InputLabel>
              <Select
                labelId="folder-select-label"
                id="folder-select"
                value={control.folder}
                label="Icon type"
                onChange={handleFolderChange}
              >
                {Object.keys(Lib.metadata).map((folder) => (
                  <MenuItem value={folder} key={folder}>
                    {folder}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box width={300}>
            <Typography id="icon-size-slider" gutterBottom>
              Icon size
            </Typography>
            <Slider
              size="small"
              defaultValue={control.size}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={handleSizeChange}
            />
          </Box>
          <TwitterPicker onChangeComplete={colorChange} color={control.color} />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            style={{ textAlign: 'center' }}
            columnCount={grid.cols}
            columnWidth={columnWidth}
            height={600}
            rowCount={Lib.metadata?.[control.folder]?.length || 0}
            rowHeight={control.size + 60}
            width={columnWidth * grid.cols}
          >
            {({ columnIndex, rowIndex, style }) => {
              const item =
                Lib.metadata?.[control.folder]?.[
                  rowIndex * grid.cols + columnIndex
                ];

              if (item == null) {
                return null;
              }

              const Icon = Lib[item.importName];

              if (!Icon) {
                return <div>{item.importName}</div>;
              }
              return (
                <div
                  className={
                    columnIndex % 2
                      ? rowIndex % 2 === 0
                        ? 'GridItemOdd'
                        : 'GridItemEven'
                      : rowIndex % 2
                      ? 'GridItemOdd'
                      : 'GridItemEven'
                  }
                  style={style}
                >
                  <IconDialog Icon={Icon} item={item} control={control} />
                </div>
              );
            }}
          </Grid>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
