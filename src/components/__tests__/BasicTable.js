import { render, screen } from "@testing-library/react";
import BasicTable from "../BasicTable";

test("show correct column names", async () => {
  render(<BasicTable />);
  const cellNumber = screen.getByTestId("cell-number");
  const cellBranchName = screen.getByTestId("cell-branch-name");
  const cellBranchNumber = screen.getByTestId("cell-branch-number");
  const cellLastSync = screen.getByTestId("cell-last-sync");
  const cellScreenNo = screen.getByTestId("cell-screen-no");
  const cellLastModified = screen.getByTestId("cell-last-modified");

  expect(cellNumber).toHaveTextContent("No");
  expect(cellBranchName).toHaveTextContent("Branch Name");
  expect(cellBranchNumber).toHaveTextContent("Branch Number");
  expect(cellLastSync).toHaveTextContent("Last Sync");
  expect(cellScreenNo).toHaveTextContent("Screen No");
  expect(cellLastModified).toHaveTextContent("Last Modified");
});

test("show loading text if the props loading is true", async () => {
  render(<BasicTable loading={true} />);

  expect(screen.getByTestId("loading-text")).toHaveTextContent(
    "Loading Data..."
  );
});

test("show all data when data length is more than 0", async () => {
  let data = [
    {
      branchName: "BANDUNG",
      branchNbr: "03",
      LastSync: `${new Date()}`,
      ScreenNo: "BAB-293e0210",
      LastModifiedDateTime: `${new Date()}`,
    },
  ];

  render(<BasicTable loading={false} data={data} />);
  const rowItem = screen.getAllByTestId("row-items");
  expect(rowItem.length).toEqual(data.length);
});
