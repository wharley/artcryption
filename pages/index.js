import Head from "next/head"
import { Grid } from "@mui/material"

import {
  Header,
  Banner,
  BasicInformation,
  RolesInformation,
  UploadProfileInformation,
  SocialInformation,
  OrganizationInformation,
} from "components"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className={styles.main}>
        <div className={styles.grid}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <OrganizationInformation />
              <SocialInformation />
            </Grid>
            <Grid item xs={6}>
              <BasicInformation />
              <RolesInformation />
              <UploadProfileInformation />
            </Grid>
          </Grid>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
