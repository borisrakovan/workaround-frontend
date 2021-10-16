import React from "react"
import Button from "@mui/material/Button"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"
import { Box, Link, Typography } from "@mui/material"

function LightBulbIcon(props: SvgIconProps) {
   return (
      <SvgIcon {...props}>
         <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
      </SvgIcon>
   )
}

interface Props {}

const Home = (props: Props) => {
   return (
      <div className="">
         <Button variant="contained">Hello World</Button>
         Hello world
         <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
            <LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Pro tip: See more{" "}
            <Link href="https://mui.com/getting-started/templates/">
               templates
            </Link>{" "}
            on the MUI documentation.
         </Typography>
         <Box
            sx={{
               bgcolor: "background.paper",
               boxShadow: 1,
               borderRadius: 1,
               p: 2,
               minWidth: 300,
            }}
         >
            <Box sx={{ color: "text.secondary" }}>Sessions</Box>
            <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
               98.3 K
            </Box>
            <Box
               sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "medium",
                  mx: 0.5,
               }}
            >
               +18.77%
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
               vs. last week
            </Box>
         </Box>
      </div>
   )
}

export default Home
