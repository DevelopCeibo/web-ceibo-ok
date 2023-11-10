import axios from "axios";

const url = "https://api.sendgrid.com/v3/marketing/contacts";

const headers = {
	Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
	"Content-Type": "application/json",
};

export default async (req, res) => {
	try {
		const newsletterListId =
			process.env.SENDGRID_NEWSLETTER_CONTACT_LIST_ID;

		const emailToAdd = req.body.email;

		const data = {
			list_ids: [newsletterListId],
			contacts: [{ email: emailToAdd }],
		};
		const response = await axios.put(url, data, { headers });
		const sendgridJobId = response.data;
		return res.status(200).json(sendgridJobId);
	} catch (error) {
		return res.status(404).json({ error: "error adding contact" });
	}
};
