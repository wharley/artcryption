import React from "react"
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
  TextField,
} from "@mui/material"

import { CardLayout } from "components"

import styles from "./Style.module.css"

const OrganizationInformation = () => (
  <CardLayout>
    <CardContent>
      <Typography sx={{ color: "#3E3E3E", marginBottom: "15px" }}>
        Name/Organization
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">First Name</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            size="small"
            placeholder="Your first name"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Last Name</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            size="small"
            placeholder="Your last name"
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Email</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            size="small"
            placeholder="sample@mail.com"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Password</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            type="password"
            size="small"
            placeholder="**********"
          />
        </Grid>
      </Grid>
    </CardContent>

    <CardActions
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        textDecorationLine: "underline",
        marginRight: "10px",
      }}
    >
      <Button sx={{ color: "#000" }} size="small">
        Change your passowrd
      </Button>
    </CardActions>

    <CardContent>
      <Typography variant="subtitle1">Pseudonym</Typography>
      <TextField
        sx={{
          border: "none",
          borderRadius: "10px",
          border: "1px solid #F5F5F5",
          backgroundColor: "#F7F9FA",
          width: "100%",
        }}
        size="small"
        placeholder="Your pseudonym"
      />

      <Typography variant="subtitle1">Address</Typography>
      <TextField
        sx={{
          border: "none",
          borderRadius: "10px",
          border: "1px solid #F5F5F5",
          backgroundColor: "#F7F9FA",
          width: "100%",
        }}
        size="small"
        placeholder="Your address"
      />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">City</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            size="small"
            placeholder="Your city"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Country</Typography>
          <TextField
            sx={{
              border: "none",
              borderRadius: "10px",
              border: "1px solid #F5F5F5",
              backgroundColor: "#F7F9FA",
              width: "100%",
            }}
            size="small"
            placeholder="Your country"
          />
        </Grid>
      </Grid>
    </CardContent>
  </CardLayout>
)

export default OrganizationInformation
