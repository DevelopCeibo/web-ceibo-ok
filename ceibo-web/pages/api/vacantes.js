
import vacantesES from "../../utils/vacantes.utils"
import vacantesEN from "../../utils/vacantesEN.utils"

export default function handler(req, res) {
  const { locale } = req.query

  const vacantes = locale == "en" ? vacantesEN : vacantesES
  res.status(200).json(vacantes)
}
