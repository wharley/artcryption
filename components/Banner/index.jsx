import React from "react"
import { Avatar, Typography } from "@mui/material"

import { SvgUpload } from "assets/svgs"

import styles from "./Style.module.css"

const Banner = () => (
  <div className={styles.container}>
    <div className={styles["share-wrapper"]}>
      <Typography variant="subtitle1">share</Typography>
      <Typography variant="subtitle2">3,456</Typography>
      <Typography variant="subtitle">likes</Typography>
    </div>
    <div className={styles["photo-wrapper"]}>
      <Typography>Cover Photo</Typography>
      <SvgUpload />
    </div>

    <Avatar
      sx={{
        width: 300,
        height: 300,
        bottom: "-80px",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "14px", color: "#6F6F6F" }}>
        collection photo
      </Typography>
      <SvgUpload width={29} height={29} />
    </Avatar>
  </div>
)

export default Banner
