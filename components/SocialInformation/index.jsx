import React from "react"
import { CardContent, Typography, TextField } from "@mui/material"

import { CardLayout } from "components"
import { SvgUpload } from "assets/svgs"

import styles from "./Style.module.css"

const SocialInformation = () => (
  <CardLayout>
    <CardContent>
      <Typography sx={{ color: "#3E3E3E", marginBottom: "15px" }}>
        Social Information
      </Typography>

      <Typography variant="subtitle">Website</Typography>
      <div className={styles.form}>
        <TextField
          sx={{
            border: "none",
            borderRadius: "10px",
            border: "1px solid #F5F5F5",
            backgroundColor: "#F7F9FA",
            width: "100%",
          }}
          size="small"
          placeholder="www.yourwebsite.com"
        />

        <div className={styles["form-social"]}>
          <Typography variant="subtitle">Facebook</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "375px",
            }}
            size="small"
            placeholder="www.yourwebsite.com"
          />
        </div>
        <div className={styles["form-social"]}>
          <Typography variant="subtitle">Instagram</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "375px",
            }}
            size="small"
            placeholder="www.yourwebsite.com"
          />
        </div>
        <div className={styles["form-social"]}>
          <Typography variant="subtitle">Twitter</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "375px",
            }}
            size="small"
            placeholder="www.yourwebsite.com"
          />
        </div>

        <SvgUpload />
      </div>
    </CardContent>
  </CardLayout>
)

export default SocialInformation
