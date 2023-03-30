import "./Buttons.css";
import Button from "./Button";
import { useState } from "react";

const Buttons = () => {
	const [outline, setOutline] = useState(false);

	const changeOutline = (outL: boolean): boolean => {
		setOutline(!outL);
		return !outL;
	};

	return (
		<>
			<h2 className="title">Buttons</h2>
			<div className="buttons-wrapper">
				<Button
					className="button"
					content="Test"
					isActive={true}
					callback={() => changeOutline(outline)}
				/>

				<Button
					className="button"
					content="Secondary"
					isActive={true}
					callback={() => console.log("I'm Secondary-1")}
				/>
				<Button
					className="button"
					content="Secondary 2"
					isActive={false}
					callback={() => console.log("I'm Secondary 2")}
				/>

				<Button
					className="button"
					content="Primary"
					isActive={true}
					callback={() => console.log("I'm Primary red")}
				/>
				<Button
					className="button"
					content="Secondary"
					isActive={true}
					callback={() => console.log("I'm Secondary-2")}
				/>
				<Button
					className="button"
					content="Secondary 2"
					isActive={false}
					callback={() => console.log("I'm Secondary 2")}
				/>

				<Button
					className="button"
					content="Primary"
					isActive={true}
					callback={() => console.log("I'm Primary green")}
				/>
				<Button
					className="button"
					content="Secondary"
					isActive={true}
					callback={() => console.log("I'm Secondary-3")}
				/>
				<Button
					className="button"
					content="Secondary 2"
					isActive={false}
					callback={() => console.log("I'm Secondary 2")}
				/>
			</div>
		</>
	);
};

export default Buttons;
