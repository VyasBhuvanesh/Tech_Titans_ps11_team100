const Complaint = require("../models/complaint.model");
const Analytics = require("../utils/analytics");

exports.getAllComplaints = (req, res) => {
  Complaint.getAll((err, result) => {
    res.json(result);
  });
};

exports.updateStatus = (req, res) => {
  const { id, status } = req.body;
  Complaint.updateStatus(id, status, () => {
    res.json({ message: "Status updated" });
  });
};

exports.getAnalytics = (req, res) => {
  Analytics.getPriorityStats((err, result) => {
    res.json(result);
  });
};
