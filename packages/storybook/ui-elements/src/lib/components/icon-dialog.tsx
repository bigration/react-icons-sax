import * as React from 'react';
import { FC, SVGProps } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { ButtonBase, DialogContent, Stack } from '@mui/material';

type IconProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const IconDialog: FC<{
  Icon: React.ComponentType<IconProps>;
  item: {
    importName: string;
    exportName: string;
    category: string;
    rootFolder: string;
  };
  control: {
    color: string;
    size: number;
    folder: string;
  };
}> = ({ Icon, item, control }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ButtonBase component="div" onClick={() => setOpen(true)}>
        <Icon size={control.size} color={control.color} />
      </ButtonBase>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Import Icon</DialogTitle>
        <DialogContent>
          <Stack direction="column" gap={2}>
            <Typography
              component="p"
              sx={{ whiteSpace: 'pre-line' }}
            >{`import { ${item.importName} } from 'react-icons-sax';`}</Typography>
            <Typography
              component="p"
              sx={{ whiteSpace: 'pre-line' }}
            >{`<${item.importName} />`}</Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
