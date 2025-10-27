import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import logo from '../../assets/logo.png'; 
import { baseUrl } from '../../baseUrl';
import { Link } from 'react-router-dom';

const Signup = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setSuccess('Signup successful! Please login.');
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <Box mb={2}>
            <img src={logo} alt="Stackly Logo" style={{ width: 120 }} />
          </Box>

          <Typography variant="h5" gutterBottom sx={{ color: '#004d66' }}>
            Create your Stackly account
          </Typography>

          <Typography variant="body2" color="textSecondary" mb={2}>
            Sign up to get started
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <TextField
              name="name"
              label="Full Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />

            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {error && (
              <Typography color="error" fontSize="0.85rem">
                {error}
              </Typography>
            )}

            {success && (
              <Typography color="green" fontSize="0.85rem">
                {success}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#00838f',
                '&:hover': {
                  backgroundColor: '#006064',
                },
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" mt={1}>
               have an account?{" "}
              <Link to="/signin" style={{ color: "#00838f", fontWeight: 600 }}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;