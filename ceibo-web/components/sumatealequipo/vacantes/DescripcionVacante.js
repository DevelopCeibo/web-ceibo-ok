import React from "react"
import { Box } from "@mui/material"

const DescripcionVacante = ({ description }) => {
  return (
    <div className="pt-70">
      <div className="container">
        <Box component="section" sx={{ border: "thin solid #e8e8e8", p: 2 }}>
          {description()}
        </Box>
      </div>
    </div>
  )
}

export default DescripcionVacante
