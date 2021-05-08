import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const link = {
	fontSize: '20px',
	color: 'black',
	textDecoration: 'none',
	paddingRight: '1%', 
	paddingLeft: '1%',
};

const LinkMain = () => {
	return (
		<div className="LinkMain" >
			<div className="logo">
			<Grid container alignItems="center" justify="center" spacing={1}>
				<Grid item sm={1}>
						<Link to="/" style={link}>Home</Link>
				</Grid>
				<Grid item sm={1}>
						<Link to="/About" style={link}>About</Link>
				</Grid>
			</Grid>
			</div>
		</div>
	);
}

export default LinkMain;




