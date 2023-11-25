// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import totalAssessmentsIcon from '../assets/view_agenda.svg';
import './styles.css';
import candidatesIcon from '../assets/candidates.svg';
import candidateSourceIcon from '../assets/cand-source.svg';
import totalPurposeIcon from '../assets/purpose.svg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Overview() {

    return (

        <>

            <Typography align='left' style={{ marginBottom: '2%' }}>
                Assessments Overview
            </Typography>

            <Box>
                <Grid container >
                    <Grid item xs={12} lg={2} >
                        <div className='border-class' style={{ height: '100%' }} >
                            <p className='heading-stats'>Total Assessment</p>
                            <div className='display-sameline' style={{ marginLeft: '18%' }}>
                                <img alt="img" src={totalAssessmentsIcon} />
                                <h4 className='stats-text'>34</h4>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <div className='border-class'>
                            <p className="heading-stats">Candidates</p>
                            <div className='display-sameline' style={{ marginLeft: '5%', marginRight: '5%' }}>
                                <div className='display-sameline'>

                                    <img  alt="img"src={candidatesIcon} />
                                    <div className='display-sameline' style={{ marginLeft: '5%' }}>
                                        <h4 className='stats-text'>11,145 </h4><h6 style={{ color: 'green' }}>+89</h6>

                                    </div>

                                </div>
                                <hr class="vertical" />
                                <div className='display-sameline' style={{}}>
                                    <h4 className='stats-text'>1,14 </h4><h6 style={{ color: 'green' }}>+89</h6>
                                </div>
                            </div>
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div><p style={{ fontSize: '10px' }}>Total Candidates</p></div>
                                        </td>
                                        <td><div><p style={{ marginLeft: "45%", fontSize: '10px' }}>Who attempted</p></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <div className='border-class' >
                            <p className="heading-stats">Candidates Source</p>
                            <div className='display-sameline' style={{ marginLeft: '5%', marginRight: '5%' }}>
                                <div className='display-sameline'>

                                    <img  alt="img"src={candidateSourceIcon} />
                                    <div className='display-sameline' style={{ marginLeft: '5%' }}>
                                        <h4 className='stats-text'>11,000 </h4><h6 style={{ color: 'green' }}>+89</h6>

                                    </div>

                                </div>
                                <hr class="vertical" />
                                <div className='display-sameline' style={{}}>
                                    <h4 className='stats-text'>145 </h4><h6 style={{ color: 'green' }}>+89</h6>
                                </div>
                                <hr class="vertical" />
                                <div className='display-sameline' style={{}}>
                                    <h4 className='stats-text'>145 </h4><h6 style={{ color: 'green' }}>+89</h6>
                                </div>
                            </div>

                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div><p style={{ fontSize: '10px' }}>E-mail</p></div>
                                        </td>
                                        <td>
                                            <div><p style={{ marginLeft: "45%", fontSize: '10px' }}>Social Share</p></div>
                                        </td>
                                        <td>
                                            <div><p style={{ marginLeft: "45%", fontSize: '10px' }}>Unique Link</p></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Grid>

                    <Grid item xs={12} lg={2} >
                        <div className='border-class' style={{ height: '100%' }}>
                            <p className='heading-stats'>Total Purpose</p>
                            <div className='display-sameline' style={{ marginLeft: '25%' }}>
                                <img  alt="img"src={totalPurposeIcon} />
                                <h4 className='stats-text'>11</h4>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}