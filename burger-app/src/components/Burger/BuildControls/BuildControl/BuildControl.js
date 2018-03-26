import React from 'react';

import classes from './BuildControl.css';

cosnt buildControl = (props) => (
		<div className={classes.BuildControl}>
			<div className{classes.la>{props.Label}</div>
			<button className={classes.Less}>Less</button>
			<button className={classes.More>More</button>	
		</div>
	);

export default buildControl;