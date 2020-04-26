import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import D3 from './data';


class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        daTa: {
          "name": "Corina",
          "birthday": 98300820710,
          "menses": [
            {
              "date": 1577836800000,
              "grade": 0
            },
            {
              "date": 1589760000000,
              "grade": 0
            }
          ]
        }
        ,
        isExists: 0
      }
    }

    async componentWillMount() {
      const response = await fetch('https://signb-project.appspot.com/visualize/otp/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "token": "3493" }),
      })
      const apidata = await response.json();
      this.setState({ daTa: apidata, isExists: 1});
    }

    render() {
    
    let D3Data;
    if (this.state.isExists==0) {
      D3Data = "";
    } else {
      D3Data = <D3 datA={this.state.daTa} />;
    }

        return (
          <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                <LocalHospitalIcon fontSize="large" />
                <Typography variant="h4" color="inherit" noWrap>
                  &nbsp;Menses Summary
                </Typography>
              </Toolbar>
            </AppBar>
            <main>
              {/* Hero unit */}
              <div>
                <Container maxWidth="xl">
                <div></div>
                <Typography opacity="0">
                  .
                </Typography>
                <div>
                  <Grid container spacing={2} justify="center">
                    <TextField id="outlined-basic" label="TokenID" variant="outlined" />
                    <Grid item>
                      <Button variant="contained" color="primary">
                        ตรวจสอบข้อมูล
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                <p></p>
                <div></div>
                <p></p>
                  <Typography>
                    {D3Data}
                  </Typography>
                </Container>
              </div>
            </main>
            {/* Footer */}
            <footer >
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                COPYRIGHT © 2020 SI Computer. ALL RIGHTS RESERVED
              </Typography>
            </footer>
            {/* End footer */}
          </React.Fragment>
        )
    }
}


export default Main;
