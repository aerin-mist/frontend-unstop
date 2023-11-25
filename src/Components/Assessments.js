import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import assignmentIcon from '../assets/assignment.svg';
import calenderIcon from '../assets/calendar_today.svg';
import shareIcon from '../assets/link.svg';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';

export default function Assessments() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Typography align='left' style={{ margin: '5% 0 2% 0' }}>
                My Assessments
            </Typography>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={4}>
                    <Card style={{ backgroundColor: "#F0F8FF", height: '100%' }}>
                        <CardContent style={{ marginTop: "15%" }}>
                            <IconButton onClick={handleOpen}>
                                <AddIcon />
                            </IconButton>
                            <p className='addassignment-text'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card sx={{ minWidth: 275 }} >
                        <CardContent>
                            <div className='display-sameline'>
                                <img  alt="img"src={assignmentIcon} style={{ marginRight: "75%" }} />
                                <IconButton >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>

                            <p className='heading-assessments'>Math Assignment</p>
                            <div className='display-sameline'>
                                <p style={{ marginRight: '2%' }} className='other-assessment-text'>Job</p>
                                {/* <hr class="verticalSmall" /> */}
                                <img  alt="img"src={calenderIcon} />
                                <p className='other-assessment-text'>20 Apr 2023</p>
                            </div>
                            <hr style={{ color: '#E5E4E2' }}></hr>
                            <div className='display-sameline'>
                                <table style={{ marginRight: '15%' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className='other-assessment-text'>
                                                00
                                                </p>
                                            </td>
                                            <td> <p className='other-assessment-text'>
                                                00
                                                </p>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                            <p className='other-assessment-text'>
                                                Duration
                                                </p>
                                            </td>
                                            <td>
                                            <p className='other-assessment-text'>
                                                Questions
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table >
                                    <tbody>
                                        <tr>
                                            <td align='left'>
                                            <div className='share'>
                                                    <img  alt="img"src={shareIcon} />Share
                                                </div>
                                            </td>
                                            <td align='right'>
                                                <Avatar sx={{ bgcolor: deepPurple[500] }}>LP</Avatar>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card sx={{ minWidth: 275 }} >
                        <CardContent>
                            <div className='display-sameline'>
                                <img  alt="img"src={assignmentIcon} style={{ marginRight: "75%" }} />
                                <IconButton >
                                    <MoreVertIcon />
                                </IconButton>
                            </div>
                            <p className='heading-assessments'>Math Assignment</p>
                            <div className='display-sameline'>
                                <p style={{ marginRight: '2%' }} className='other-assessment-text'>Job</p>
                                <img  alt="img"src={calenderIcon} />
                                <p className='other-assessment-text'>20 Apr 2023</p>
                            </div>
                            <hr style={{ color: '#E5E4E2' }}></hr>
                            <div className='display-sameline'>
                                <table style={{ marginRight: '15%' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                            <p className='other-assessment-text'>
                                                00
                                                </p>
                                            </td>
                                            <td> <p className='other-assessment-text'>
                                                00
                                                </p>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                            <p className='other-assessment-text'>
                                                Duration
                                                </p>
                                            </td>
                                            <td>
                                            <p className='other-assessment-text'>
                                                Questions
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table >
                                    <tbody>
                                        <tr>
                                            <td align='left'>
                                                <div className='share'>
                                                    <img alt="img" src={shareIcon} />Share
                                                </div>
                                            </td>
                                            <td align='right'>
                                                <Avatar sx={{ bgcolor: deepOrange[500] }}>GS</Avatar>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography variant='h5'>
                            Create new assessment
                        </Typography>
                        <div style={{ margin: '5% 0 5% 0' }}>
                            <label>Name of assessment</label>
                            <TextField style={{ width: '95%' }} id="outlined-basic" label="Name of assessment" variant="outlined" />
                        </div>

                        <div style={{ marginBottom: '5%' }}>
                            <label>
                                Purpose of the test is
                            </label>
                            <Select
                                style={{ width: '95%' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //   value={age}
                                label="Age"
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div style={{ marginBottom: '5%' }}>
                            <label>
                                Description
                            </label>
                            <Select
                                style={{ width: '95%' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //   value={age}
                                label="Age"
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div style={{ marginBottom: '5%' }}>
                            <label>Skills</label>
                            <Autocomplete
                                style={{ width: '95%' }}
                                multiple
                                id="tags-outlined"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[1]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="skills"
                                        placeholder="Add Skills"
                                    />
                                )}
                            />
                        </div>

                        <div style={{ marginBottom: '5%' }}>
                            <label>Duration of assessment</label>
                            <TextField style={{ width: '95%' }} id="outlined-basic" label="HH:MM:SS" variant="outlined" />
                        </div>

                        <Button align="center" style={{ width: '95%' }} variant="contained">Save</Button>
                    </Box>
                </Modal>
            </div>

        </>
    )
}
const top100Films = [
    { title: 'React.js', year: 1994 },
    { title: 'Next.js', year: 1972 },
    { title: 'Material UI', year: 1974 },
    { title: 'Spring boot', year: 2008 },]