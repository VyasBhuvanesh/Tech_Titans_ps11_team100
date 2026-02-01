const Complaint = require("../models/complaint.model");

exports.create = (req, res) => {
  Complaint.createComplaint(req.body, () => {
    res.json({ message: "Complaint submitted successfully" });
  });
};

exports.getStudentComplaints = (req, res) => {
  Complaint.getByStudent(req.params.id, (err, result) => {
    res.json(result);
  });
};

exports.addFeedback = (req, res) => {
  const { complaint_id, feedback } = req.body;
  Complaint.addFeedback(complaint_id, feedback, () => {
    res.json({ message: "Feedback added" });
  });
};
