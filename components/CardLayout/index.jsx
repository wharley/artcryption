import React from "react"
import { Card } from "@mui/material"

const CardLayout = ({ children }) => (
  <Card
    sx={{
      minWidth: 313,
      borderRadius: "17px",
      border: "1px solid #DCDCE0",
      boxShadow: "none",
    }}
  >
    {children}
  </Card>
)

export default CardLayout
