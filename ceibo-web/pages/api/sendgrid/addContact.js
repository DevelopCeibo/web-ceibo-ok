import axios from "axios";
const { SENDGRID_NEWSLETTER_CONTACT_LIST_ID } = process.env

const url = "https://api.sendgrid.com/v3/marketing/contacts";

const headers = {
	Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
	"Content-Type": "application/json",
};

const sendgridContactListIds = {
	newsletter : SENDGRID_NEWSLETTER_CONTACT_LIST_ID,
	eventoId11 : "be57a806-2ea0-47ef-97b1-08e21c19ba55" 
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

		console.log(contactList)

		const listId = getSendgridContactListId({contactListName : contactList})

		console.log(listId)

		const data = {
			list_ids: [listId],
			contacts: [{ email: emailToAdd }],
		};
		const response = await axios.put(url, data, { headers });
		const sendgridJobId = response.data;
		return res.status(200).json(sendgridJobId);
	} catch (error) {
		// console.log("ERROR",error)
		return res.status(404).json({ error: "error adding contact" });
	}
};


