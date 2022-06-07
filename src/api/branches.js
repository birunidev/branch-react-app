import api from "../configs/axios";

const getAllBranches = async () => {
  try {
    const res = await api.get("/BranchReps");
    return res;
  } catch (error) {
    return null;
  }
};
const branchesAPI = { getAllBranches };
export default branchesAPI;
