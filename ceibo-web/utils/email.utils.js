export function htmlEventTemplate  ({eventName, eventTime, eventLocation, name, addToCalendarLink})  {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 20px auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #10113e; color: white; padding: 0px 10px; border-radius: 10px 10px 0 0; display: flex; justify-content: space-between; align-items: center;">
      <img src="https://i.ibb.co/s3Xm73D/Logo-ceibo-digital-horizontal-blanco.png" alt="Logo de Ceibo Digital" style="max-height: 100px; max-width: 200px;">
    </div>
    <div style="padding: 20px;">
      <p>¡Hola ${name}, muchas gracias por tu interés en el evento <b>"${eventName}"</b>!</p>
      <p>Te esperamos el <b>${eventTime} en ${eventLocation}</b>. Para más consultas, no dudes en escribirnos a <a href="mailto:prensa@ceibo.digital">prensa@ceibo.digital</a></p>
      <p>El equipo de Ceibo Digital.</p>
    </div>
      ${getAddToCalendarHtml(addToCalendarLink)}
    <div style="background-color: #10113e; color: white; padding: 0px; border-radius: 0 0 10px 10px; text-align: center; height: 75px;">
    </div>
  </div>
  
</body>
</html>
`
}

function getAddToCalendarHtml(addToCalendarLink) {
  return `<p style="margin:0px 0px 10px 0px;text-align:center;font-size:17px;line-height:150%;color:#152058;font-weight:bold;">
    Agrega el evento a tu calendario</p>
<p style="margin:0px 0px 10px 0px;text-align:center;"><a href="${addToCalendarLink}+apple"
        title="Apple" target="_blank" style="display:inline;"><img
            src="https://buttons.addevent.com/atc-apple-default-r48-ico-s36.png" alt="Apple" height="36" border="0"
            style="height:36px;display:inline;" /></a> <a href="${addToCalendarLink}+google"
        title="Google" target="_blank" style="display:inline;"><img
            src="https://buttons.addevent.com/atc-google-default-r48-ico-s36.png" alt="Google" height="36" border="0"
            style="height:36px;display:inline;" /></a> <a href="${addToCalendarLink}+outlook"
        title="Outlook" target="_blank" style="display:inline;"><img
            src="https://buttons.addevent.com/atc-outlook-default-r48-ico-s36.png" alt="Outlook" height="36" border="0"
            style="height:36px;display:inline;" /></a> <a href="${addToCalendarLink}+outlookcom"
        title="Outlook.com" target="_blank" style="display:inline;"><img
            src="https://buttons.addevent.com/atc-outlookcom-default-r48-ico-s36.png" alt="Outlook.com" height="36"
            border="0" style="height:36px;display:inline;" /></a> <a
        href="${addToCalendarLink}+office365" title="Office 365" target="_blank"
        style="display:inline;"><img src="https://buttons.addevent.com/atc-officecom-default-r48-ico-s36.png"
            alt="Office 365" height="36" border="0" style="height:36px;display:inline;" /></a> <a
        href="${addToCalendarLink}+yahoo" title="Yahoo" target="_blank"
        style="display:inline;"><img src="https://buttons.addevent.com/atc-yahoo-default-r48-ico-s36.png" alt="Yahoo"
            height="36" border="0" style="height:36px;display:inline;" /></a> </p>
		<p style="margin:0;padding:25px 0px 0px 0px;text-align:center;"><a
        href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg" target="_blank"
        style="font-weight:normal;color:#125ef8;text-decoration:underline;">
`

}