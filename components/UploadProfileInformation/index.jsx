import React from "react"
import Image from "next/image"
import { Avatar, Card, CardContent, Typography } from "@mui/material"

import { SvgUpload, SvgAdd } from "assets/svgs"
import imageMemberOne from "assets/images/memberOne.png"
import imageMemberTwo from "assets/images/memberTwo.png"

const members = [
  {
    name: "Name",
    avatar: imageMemberOne,
  },
  {
    name: "Name",
    avatar: imageMemberTwo,
  },
]

import styles from "./Style.module.css"

const UploadProfileInformation = () => (
  <Card
    sx={{
      minWidth: 313,
      borderRadius: "17px",
      border: "1px solid #DCDCE0",
      boxShadow: "none",
    }}
  >
    <CardContent>
      <Typography sx={{ color: "#3E3E3E" }}>Upload profile photo</Typography>
      <Avatar>
        <SvgUpload />
      </Avatar>

      <Typography sx={{ color: "#3E3E3E" }}>Add Team Member</Typography>
      <div className={styles.members}>
        {members.map((member, index) => (
          <div key={index}>
            <Avatar>
              <Image src={member.avatar} alt="Avatar's Profile" />
            </Avatar>
            <Typography variant="subtitle1" gutterBottom component="div">
              {member.name}
            </Typography>
          </div>
        ))}
        <Avatar>
          <SvgAdd />
        </Avatar>
      </div>
    </CardContent>
  </Card>
)

export default UploadProfileInformation
