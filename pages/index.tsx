import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
export default function Index() {
  return (
    <Grid spacing={2} alignContent="center" justifyContent="center" container>
      <Grid item>
        <Typography variant="h2" component="h2">
          Simple - Shop
        </Typography>
      </Grid>
    </Grid>
  );
}
