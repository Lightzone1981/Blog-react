export const getFormattingDate = (date: string): string => {
	const dateArr = date.split("-");
	let res = "";
	switch (dateArr[1]) {
		case "01":
			res += "January";
			break;
		case "02":
			res += "February";
			break;
		case "03":
			res += "March";
			break;
		case "04":
			res += "April";
			break;
		case "05":
			res += "May";
			break;
		case "06":
			res += "June";
			break;
		case "07":
			res += "July";
			break;
		case "08":
			res += "August";
			break;
		case "09":
			res += "September";
			break;
		case "10":
			res += "October";
			break;
		case "11":
			res += "November";
			break;
		case "12":
			res += "December";
	}

	res += ` ${dateArr[2]}, `;
	res += dateArr[0];
	return res;
};