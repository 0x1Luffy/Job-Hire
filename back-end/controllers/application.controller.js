import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
export const applyJob = async (req,res) =>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId)
        {
            return res.status(400).json({
                message:"Job Id Is Required",
                success:false
            });
        };

        //chehcking if the user has already applied for this job

        const existingApplication = await Application.findOne({job:jobId, applicant:userId});
        if(existingApplication)
        {
            return res.status(400).json({
                message:"You Have Already Applied for this Job!",
                success:false
            });
        }

        // Chehcking if Job Exits
        const job = await Job.findById(jobId);
        if(!job)
        {
            return res.status(400).json({
                message: "Job not found",
                success:false
            });
        }
       
        // Creating a new job Apllication 

        const newAppplication = await Application.create({
            job:jobId,
            applicant : userId,

        });

        job.applications.push(newAppplication._id);
        await job.save();
        return res.status(201).json({
            message:"Applied Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
};

export const getAppliedJobs = async (req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application)
        {
            return res.status(401).json({
                message:"No Application!",
                success:false
            });
        }

        return res.status(200).json({
            message:"Success true",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
};

export const getApplicants = async (req,res)=>{
    try {
        const {id} = req.params;
        const job = await Job.findById(jobId).populate(
            {
                path:'applications',
                options:{sort:{createdAt:-1}},
                populate:{
                    path:'applicant'
                }
            });
        if(!job)
        {
            return res.status(404).json({
                message:"Job not Found",
                success:false
            })
        };

        return res.status(200).json({
            job,
            success:true
        });
    } catch (error) {
        console.log(error)
    }
};

export const updateStatus =  async (req,res) =>{
    try {
        const {status} =req.body;
        const applicationId = req.params.id;
        if(!status)
        {
            return res.status(400).json({
                message:"Status Required",
                success:false
            });
        }

        const application = await Application.findOne({_if:applicationId});
        if(!application)
        {
            return res.status(400).json({
                message:"Application Not Found",
                success:false
            });
        }

        // updating the status of the application

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Job Status has Been Changes",
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}