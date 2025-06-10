import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

// @desc     Apply for a job
// @route    GET /api/application/apply/:id
// @access   Private
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    // check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job" });
    }

    // check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);

    await job.save();

    return res
      .status(201)
      .json({ message: "Application submitted successfully" });
  } catch (error) {
    console.log("Error in apply job", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// @desc     Get all applied jobs
// @route    GET /api/application/get
// @access   Private
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });
    if (!application) {
      return res.status(404).json({ message: "No applications found" });
    }

    return res.status(200).json({ application });
  } catch (error) {
    console.log("Error in get applied jobs", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// @desc     Get all applicants for a job
// @route    GET /api/application/:id/applicants
// @access   Private
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json({ job });
  } catch (error) {
    console.log("Error in getApplicants", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// @desc     Update application status
// @route    POST /api/application/update-status/:id
// @access   Private
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const application = await Application.findOne({ _id: applicationId });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // update the status
    application.status = status.toLowerCase();
    await application.save();

    return res
      .status(200)
      .json({ message: "Application status updated successfully" });
  } catch (error) {
    console.log("Error in updateStatus", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
