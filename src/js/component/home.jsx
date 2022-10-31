import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx"
//include images into your bundle


//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	const fourthDigit = Math.floor((seconds / 1) % 10);
	const thirdDigit = Math.floor ((seconds / 10) % 10);
	const secondDigit = Math.floor ((seconds / 100) % 10);
	const firstDigit = Math.floor ((seconds / 1000) % 10);

	useEffect(() => {
		setTimeout(() => {
			setSeconds((seconds) => seconds +1);
		} , 1000);
	});

	return (
		<div className="d-flex flew-row finalClock">
			<div className="finalDigits">
				<i className="far fa-clock icon-style"  />
			</div>
			<Timer value={firstDigit}/>
			<Timer value={secondDigit}/>
			<Timer value={thirdDigit}/>
			<Timer value={fourthDigit}/>
		</div>
	)
	
	
};

export default Home;
