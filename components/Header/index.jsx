import React from "react"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

import { SvgBell, SvgSettings } from "assets/svgs"
import imageDripbox from "assets/images/dripbox.png"

import styles from "./Style.module.css"

const Header = () => (
  <header>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image src={imageDripbox} alt="Picture of the Artcryption" />
      <h3 className={styles.heading}>artcryption</h3>

      <nav className={styles.nav}>
        <Typography sx={{ minWidth: 70 }}>how it works</Typography>
        <Typography sx={{ minWidth: 70 }}>feed</Typography>
        <Typography sx={{ minWidth: 70 }}>blog</Typography>
        <Typography sx={{ minWidth: 70 }}>drops</Typography>
      </nav>

      <SvgBell />
      <SvgSettings />
      <Button
        sx={{ backgroundColor: "#000", borderRadius: "10px" }}
        variant="contained"
        onClick={() => {
          alert("clicked")
        }}
      >
        Join waitlist
      </Button>
    </Box>
  </header>
)

export default Header
