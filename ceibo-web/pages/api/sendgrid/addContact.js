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
	eventoId12 : "fe6594df-451e-4d47-845b-b891b8aa2c09",
	eventoId13:  "146b99bd-510e-4b4e-aec3-2b5c3f5ba338",
	eventoId14: "eee4526f-6da3-4b86-a979-ab320b0b0033", 
	eventoId15: "81b535b9-2352-48b1-a5a1-82dce77025b2"
}


const getSendgridContactListId = ({ contactListName }) => {

	switch (contactListName) {
		case 'newsletter':
			return sendgridContactListIds.newsletter
		break
		case 'eventoId11':
			return sendgridContactListIds.eventoId11
		break
		case 'eventoId12':
			return sendgridContactListIds.eventoId12
		break
		case 'eventoId13':
			return sendgridContactListIds.eventoId13
			break
		case 'eventoId14':
			return sendgridContactListIds.eventoId14
			break
		case 'eventoId15':
			return sendgridContactListIds.eventoId15
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

		console.log("register response",sendgridJobId)
		return res.status(200).json(sendgridJobId);
	} catch (error) {
		return res.status(404).json({ error: "error adding contact" });
	}
};


