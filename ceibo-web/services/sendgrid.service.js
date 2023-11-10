import baseUrl from "../utils/baseUrl";
import axios from "axios";

export const addEmailToSendgridContactList = async (email) => {
	try {
		const url = `${baseUrl}/api/sendgrid/addContact`;
		const response = await axios.post(url, { email });
		const sendgridJobId = response.data;
		return sendgridJobId;
	} catch (error) {
		return { error: "Error adding contact to sendgrid database" };
	}
};
