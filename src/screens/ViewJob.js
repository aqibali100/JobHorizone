import React, { useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import '../assets/styles/ViewJob.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById } from '../reducers/JobSlice';

const ViewJob = () => {
    const jobId = useParams();
    const dispatch = useDispatch();
    const job = useSelector((state) => state.jobs.job);
    console.log(job)
    useEffect(() => {
        if (jobId) {
          dispatch(fetchJobById(jobId));
        }
      }, [dispatch, jobId]);
    return (
        <Container className="container" maxWidth="md">
            <Card className="card">
                <CardContent className="card-content">
                    <Box className="box-center">
                        <Typography className="typography-title" variant="h4" gutterBottom>
                            {job?.jobTitle}
                        </Typography>
                        <Typography className="typography-subtitle" variant="h6" color="textSecondary">
                            {job?.companyName}
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} className="grid-item">
                            <Typography className="typography-body"><span className="typography-bold">Employer Name:</span> {job?.user?.name}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Employer Email:</span> {job?.user?.email}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Phone Number:</span> {job?.companyPhoneNumber}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Job Type:</span> {job?.jobType}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Industry:</span> {job?.industry}</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className="grid-item">
                            <Typography className="typography-body"><span className="typography-bold">Location:</span> {job?.jobLocation}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Experience:</span> {job?.experience}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Rate:</span> {job?.rate}</Typography>
                            <Typography className="typography-body"><span className="typography-bold">Members:</span> {job?.numberOfMembers}</Typography>
                        </Grid>
                    </Grid>

                    <Divider className="divider" />

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography className="typography-body"><span className="typography-bold">Minimum Pay:</span> {job?.minimumPay + ' PKR'}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography className="typography-body"><span className="typography-bold">Maximum Pay:</span> {job?.maximumPay + ' PKR'}</Typography>
                        </Grid>
                    </Grid>

                    <Divider className="divider" />

                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Job Description
                        </Typography>
                        <Typography className="typography-description" variant="body1" color="textSecondary">
                            {job?.jobDescription}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center" mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={`/application-form/${job?._id}`}
                        >
                            Apply Now
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ViewJob;
