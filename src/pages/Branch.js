import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { branchesAPI } from "../api";
import { Header, BasicTable } from "../components";

export default function Branch() {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    branchesAPI
      .getAllBranches()
      .then((res) => {
        setBranches(res);
        setLoading(false);
      })
      .catch((err) => {});
  });

  return (
    <div>
      <Header activePage="Branch" />
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography
            variant="h3"
            data-testid="branch-title"
            className="font-bold"
          >
            Data Branch
          </Typography>

          <BasicTable
            data-testid="table-component"
            data={branches}
            loading={loading}
          />
        </Box>
      </Container>
    </div>
  );
}
