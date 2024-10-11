// import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import NavigationMenu from './NavigationMenu';


function ApplyToSchoolForm() {
  
  
    return (
    <Stack spacing={2}>
      <NavigationMenu/>
      <Stack spacing={2}>
        <Input
          placeholder="Type in here…"
          sx={{
            '&::before': {
              border: '1.5px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: '2.5px',
              right: '2.5px',
              bottom: 0,
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
              borderBottomLeftRadius: '64px 20px',
              borderBottomRightRadius: '64px 20px',
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        />
        <Input
          placeholder="Type in here…"
          variant="soft"
          sx={{
            '--Input-radius': '0px',
            borderBottom: '2px solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'neutral.outlinedHoverBorder',
            },
            '&::before': {
              border: '1px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        />
      </Stack>

      <Input placeholder="Type in here…" error defaultValue="Oh no, error found!" />
      <FormControl error>
        <FormLabel>Label</FormLabel>
        <Input placeholder="Type in here…" defaultValue="Oh no, error found!" />
        <FormHelperText>
          <InfoOutlined />
          Opps! something is wrong.
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default ApplyToSchoolForm;