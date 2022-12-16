import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as Lib from 'react-icons-sax';
import { FixedSizeGrid as Grid } from 'react-window';
import { Paper, Stack, Theme, useMediaQuery } from '@mui/material';
import { TwitterPicker } from 'react-color';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { IconDialog } from '@bigration-libs/ui-elements';
import TextField from '@mui/material/TextField';
import HeaderContent from './HeaderContent';

export default function Content() {
  const S = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const M = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const [icons, setIcons] = React.useState<
    Array<{
      importName: string;
      exportName: string;
      category: string;
      rootFolder: string;
    }>
  >(Lib['outline']);

  const [control, setControl] = React.useState<{
    color: string;
    size: number;
    folder: string;
    query?: string;
  }>({ color: '#673ab7', size: 32, folder: 'outline', query: undefined });

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
    setControl({ ...control, folder: event.target.value, query: undefined });
    setIcons(Lib[event.target.value]);
  };

  const handleQuerySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl({ ...control, query: event.target.value });

    if (!event.target.value) {
      setIcons(Lib[control.folder]);
    } else {
      setIcons(
        icons.filter((icon) =>
          icon.importName
            .toLowerCase()
            .includes(event.target.value.toLowerCase().trim())
        )
      );
    }
  };

  return (
    <>
      <HeaderContent />
      <Container maxWidth="md">
        <Stack
          component={Paper}
          direction="column"
          justifyContent="center"
          gap={4}
          alignItems="center"
          sx={{ p: 5 }}
        >
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
                  {[
                    'outline',
                    'twotone',
                    'linear',
                    'bulk',
                    'bold',
                    'broken',
                  ].map((folder) => (
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
            <TwitterPicker
              onChangeComplete={colorChange}
              color={control.color}
              triangle="hide"
            />
          </Stack>
          <TextField
            id="search-field"
            label="Search icons"
            variant="outlined"
            fullWidth
            value={control.query || ''}
            onChange={handleQuerySearch}
          />
        </Stack>

        <Box
          sx={{
            p: 5,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            style={{ textAlign: 'center' }}
            columnCount={grid.cols}
            columnWidth={columnWidth}
            height={600}
            rowCount={icons.length / grid.cols}
            rowHeight={control.size + 60}
            width={columnWidth * grid.cols}
          >
            {({ columnIndex, rowIndex, style }) => {
              const item = icons[rowIndex * grid.cols + columnIndex];

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
    </>
  );
}
