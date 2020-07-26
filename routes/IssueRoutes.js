const Router = require("express");
const {
  createIssue,
  updateIssue,
  deleteIssue,
  getIssues,
} = require("../controllers/IssueController");

const router = Router();

router.post("/createIssue", createIssue);
router.put("/updateIssue", updateIssue);
router.delete("/deleteIssue", deleteIssue);
router.post("/getIssues", getIssues);

module.exports = router;
