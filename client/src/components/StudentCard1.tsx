// import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import image1 from '../assets/JB_Student_1.jpeg'


function StudentCard1() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', margin:2 }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src={image1} sx={{ '--Avatar-size': '8rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          1st Grade
        </Chip>
        <Typography level="title-lg">Test Student 1</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Probably delete this text area
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Edit Student</Button>
            <Button>View Applications</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
 );
}

export default StudentCard1;