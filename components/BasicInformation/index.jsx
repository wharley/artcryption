import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material"

import { SvgChecked } from "assets/svgs"

import styles from "./Style.module.css"

const BasicInformation = () => (
  <Card
    sx={{
      minWidth: 313,
      borderRadius: "17px",
      border: "1px solid #DCDCE0",
      boxShadow: "none",
    }}
  >
    <CardContent>
      <Typography sx={{ color: "#3E3E3E" }}>Digital identity</Typography>
      <Typography variant="h6">Uploaded document</Typography>
      <TextField
        sx={{
          border: "none",
          borderRadius: "10px",
          border: "1px solid #F5F5F5",
          backgroundColor: "#F7F9FA",
          width: "252px",
        }}
        size="small"
        placeholder="Driver License"
      />

      <div className={styles["status-container"]}>
        <SvgChecked />
        <Typography sx={{ color: "#000" }}>Status: Confirmed</Typography>
      </div>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        textDecorationLine: "underline",
      }}
    >
      <Button sx={{ color: "#000" }} size="small">
        Upload a new document
      </Button>
    </CardActions>
  </Card>
)

export default BasicInformation
