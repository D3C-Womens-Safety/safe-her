import React, { useState, useEffect } from 'react';
import '../Styles/login.css';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

export const Login = () => {
  const { user, login, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name,
        email: user.email,
        picture: user.picture,
      });
      checkAndAddOrUpdateUser(user);
    }
  }, [user]);

  const handleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          const userData = { ...codeResponse, name: res.data.name, email: res.data.email, picture: res.data.picture };
          setProfile(res.data);
          login(userData);
          checkAndAddOrUpdateUser(userData);
        })
        .catch((err) => console.log('Login Failed:', err));
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const handleLogout = () => {
    localStorage.removeItem('user');
    setProfile(null);
    logout();
    window.location.href = '/login';
  };

  const checkAndAddOrUpdateUser = (user) => {
    axios.get('http://localhost:5001/user/get', {
      params: { email: user.email }
    })
    .then(response => {
      if (response.status === 200 && response.data) {
        const existingUser = response.data;
        if (existingUser.name !== user.name || existingUser.picture !== user.picture) {
          axios.post('http://localhost:5001/user/add-or-update', {
            email: user.email,
            name: user.name,
            user_id: user.user_id,
            verified_email: true,
            picture: user.picture
          })
          .then(response => console.log(response.data))
          .catch(error => console.log("Error updating user:", error));
        }
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        axios.post('http://localhost:5001/user/add-or-update', {
          email: user.email,
          name: user.name,
          user_id: user.user_id,
          verified_email: true,
          picture: user.picture
        })
        .then(response => console.log(response.data))
        .catch(error => console.log("Error adding user:", error));
      } else {
        console.log("Error fetching user:", error);
      }
    });
  };

  return (
    <div className='parent'>
      <div className='height'>
          <h3>{profile ? 'Click here to log out!' : 'Click here to login with Google!'}</h3>
          <br />
          <br />
          {profile ? (
              <div>
                  <img src={profile.picture} alt="user image" />
                  <p>Name: {profile.name}</p>
                  <p>Email Address: {profile.email}</p>
                  <br />
                  <br />
                  <button onClick={handleLogout}>Log out</button>
              </div>
          ) : (
              <button className='rect-button' onClick={handleLogin}>Log In</button>
          )}
      </div>
    </div>
  );
};

