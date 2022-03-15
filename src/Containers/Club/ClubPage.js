import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Row } from "react-bootstrap";
import Link from "@mui/material/Link";
import UserCard from "../../Components/UserCard/UserCard";

const ClubPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <UserCard>
            <Link href="/schedule">Schedule Interview</Link>
          </UserCard>
        </Grid>
        <Grid item xs={4}>
          <UserCard>
            <Link href="/candidates">Applied Canidates</Link>
          </UserCard>
        </Grid>
        <Grid item xs={4}>
          <UserCard>
            <Link href="/members">Members</Link>
          </UserCard>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ClubPage;

{
  /* <Row>
  <UserCard>
    <Link href="/schedule">Schedule Interview</Link>
  </UserCard>
  <UserCard>
    <Link href="/candidates">Applied Canidates</Link>
  </UserCard>
  <UserCard>
    <Link href="/members">Members</Link>
  </UserCard>
</Row>; */
}
