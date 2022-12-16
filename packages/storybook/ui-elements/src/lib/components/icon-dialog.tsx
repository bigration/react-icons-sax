import * as React from 'react';
import { FC, SVGProps } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { ButtonBase, DialogContent } from '@mui/material';
import { CodeHighlight } from './CodeHighlight';

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

  const markdown = `
  \`\`\`typescript
   import { ${item.importName} } from 'react-icons-sax';

   <${item.importName} />

  \`\`\`
`;

  return (
    <>
      <ButtonBase component="div" onClick={() => setOpen(true)}>
        <Icon size={control.size} color={control.color} />
      </ButtonBase>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Import Icon</DialogTitle>
        <DialogContent>
          <CodeHighlight markdown={markdown} />
        </DialogContent>
      </Dialog>
    </>
  );
};
