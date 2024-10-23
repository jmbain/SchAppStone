// import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
// import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { Button } from '@mui/joy';

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function ApplyToSchoolForm() {
  
  
    return (
    <Stack spacing={2}>
      <FormLabel>Select a School</FormLabel>
      <Select defaultValue="placeholder">
        <Option value="placeholder">Select a school...</Option>
        <Option value="DOLGEVILLE ELEMENTARY SCHOOL">DOLGEVILLE ELEMENTARY SCHOOL</Option>
        <Option value="JAMES A GREEN JUNIOR-SENIOR HIGH SCHOOL">JAMES A GREEN JUNIOR-SENIOR HIGH SCHOOL</Option>
        <Option value="MOHONASEN SENIOR HIGH SCHOOL">MOHONASEN SENIOR HIGH SCHOOL</Option>
        <Option value="BELLPORT SENIOR HIGH SCHOOL">BELLPORT SENIOR HIGH SCHOOL</Option>
      </Select>
      <FormLabel>Select a Student</FormLabel>
      <Select defaultValue="placeholder">
        <Option value="placeholder">Select a student...</Option>
        <Option value="student1">Student 1</Option>
        <Option value="student2">Student 2</Option>
      </Select>
      {/* <Input placeholder="Type in here…" error defaultValue="Oh no, error found!" /> */}
      <FormControl error>
        <FormLabel>Type your name to sign</FormLabel>
        <Input placeholder="Type in here…" color='neutral' />
        <FormHelperText>
          {/* <InfoOutlined />
          Oops! something is wrong. */}
        </FormHelperText>
        <Button>Submit Application!
        </Button>
      </FormControl>
    </Stack>
  );
}

export default ApplyToSchoolForm;