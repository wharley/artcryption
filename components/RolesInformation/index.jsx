import React from "react"
import { CardActions, CardContent, Grid, Typography } from "@mui/material"

import { CardLayout } from "components"

const tags = [
  {
    label: "Creator",
    color: "#BAE5F8",
  },
  {
    label: "Curator",
    color: "#D9BAF8",
  },
  {
    label: "Collector",
    color: "#BAF8CF",
  },
  {
    label: "Other",
    color: "#F8BABA",
  },
]

import styles from "./Style.module.css"

const RolesInformation = () => (
  <CardLayout>
    <CardContent>
      <Typography sx={{ color: "#3E3E3E" }}>Roles</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "14px" }}>Primary Role</Typography>
          {tags.map((tag) => (
            <div
              style={{
                display: "flex",
                width: "70px",
                height: "18.78px",
                backgroundColor: tag.color,
                borderRadius: "18.8394px",
                justifyContent: "center",
                alignItems: "center",
                margin: "15px 0",
              }}
              key={tag.label}
            >
              <span className={styles["list-tag-label"]}>{tag.label}</span>
            </div>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "14px" }}>Additional Role(s)</Typography>
          {tags.map((tag) => (
            <div
              style={{
                display: "flex",
                width: "70px",
                height: "18.78px",
                backgroundColor: tag.color,
                borderRadius: "18.8394px",
                justifyContent: "center",
                alignItems: "center",
                margin: "15px 0",
              }}
              key={tag.label}
            >
              <span className={styles["list-tag-label"]}>{tag.label}</span>
            </div>
          ))}
        </Grid>
      </Grid>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        fontSize: "10px",
        lineHeight: "12px",
      }}
    >
      <Typography>you can select more than one</Typography>
    </CardActions>
  </CardLayout>
)

export default RolesInformation
