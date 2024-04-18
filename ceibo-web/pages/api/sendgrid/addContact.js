import axios from "axios";
const { SENDGRID_NEWSLETTER_CONTACT_LIST_ID } = process.env

const url = "https://api.sendgrid.com/v3/marketing/contacts";

const headers = {
	Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
	"Content-Type": "application/json",
};

const sendgridContactListIds = {
	newsletter : SENDGRID_NEWSLETTER_CONTACT_LIST_ID,
	eventoId11 : "be57a806-2ea0-47ef-97b1-08e21c19ba55" ,
	eventoId12 : "fe6594df-451e-4d47-845b-b891b8aa2c09"
}


const getSendgridContactListId = ({ contactListName }) => {

	switch (contactListName) {
		case 'newsletter':
			return sendgridContactListIds.newsletter
		break
		case 'eventoId11':
			return sendgridContactListIds.eventoId11
		break

	}
}

export default async (req, res) => {
	try {
	
		const emailToAdd = req.body.email;
		const contactList = req.body.contactList

		const listId = getSendgridContactListId({contactListName : contactList})

		const data = {
			list_ids: [listId],
			contacts: [{ email: emailToAdd }],
		};
		const response = await axios.put(url, data, { headers });
		const sendgridJobId = response.data;
		return res.status(200).json(sendgridJobId);
	} catch (error) {
		return res.status(404).json({ error: "error adding contact" });
	}
};


