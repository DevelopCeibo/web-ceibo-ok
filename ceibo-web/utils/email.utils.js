export const htmlEventTemplate = (eventName, eventTime, eventLocation, name) => (`<!DOCTYPE html>
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
    <div style="background-color: #10113e; color: white; padding: 0px; border-radius: 0 0 10px 10px; text-align: center; height: 75px;">
    </div>
  </div>
</body>
</html>
`)
