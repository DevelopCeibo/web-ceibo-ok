import vacantesES from "../../utils/vacantes.json"
import vacantesEN from "../../utils/vacantesEN.json"

export default function handler(req, res) {
  const { locale } = req.query

  const vacantes = locale == "en" ? vacantesEN : vacantesES
  res.status(200).json(vacantes)
}
