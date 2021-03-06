/**
 * @author Vali Shaik
 */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserModel = require("../models/User");
const People = require("../models/People");
//Adding user to DB
exports.addUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    await People.create({
      name: req.body.userName,
      role: req.body.jobTitle,
      projectName: "Project 0",
      projectKey: "P0",
      projectType: "Dummy Project",
      projectLead: "Dummy Lead",
    });
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      console.log(error);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log("error:", error.message);
      return res.status(500).json({
        sucess: false,
        error: "Server Error",
      });
    }
  }
};

//Fetching the user based on User Id
exports.getUser = async (req, res) => {
  var userfield = req.params.userfield;
  try {
    const user = await UserModel.find({
      id: userfield,
    });
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Server Error ${error}`,
    });
  }
};

//Updating the user details
exports.modifyUser = async (req, res) => {
  try {
    const user = await UserModel.updateOne(
      { id: req.body.id },
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          jobTitle: req.body.jobTitle,
          department: req.body.department,
          organisation: req.body.organisation,
          country: req.body.country,
        },
      }
    );
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log("error:", error.message);
      return res.status(500).json({
        sucess: false,
        error: "Server Error",
      });
    }
  }
};
