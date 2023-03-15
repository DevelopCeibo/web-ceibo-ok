import vacantesES from "../../utils/vacantes.json"
import vacantesEN from "../../utils/vacantesEN.json"

export default function handler(req, res) {
  const { locale, single, slug } = req.query

  const vacantes = locale == "en" ? vacantesEN : vacantesES
  let vacante
  if (single && slug) {
    vacante = vacantes.find((vac) => vac["path-url"] == slug)
  }

  let response = single ? vacante : vacantes
  res.status(200).json(response)
}
