const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

// @desc     Get all Admins
// @route    /admins
// @access   Public
exports.getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();

    res.status(200).json({
      success: true,
      total_admins: admins.length,
      data: admins,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc     Get single admin
// @route    /admins/:id
// @access   Private
exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      res.status(404).json({
        message: `Admin not found with id ${req.params.id}`,
      });
    } else {
      res.status(200).json({
        success: true,
        data: admin,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc    Create Admin
// @route   /admins
// @access  Private
exports.createAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.create(req.body);

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Update admin details
// @route   /admins/:id
// @access  Private
exports.updateAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Delete single admin
// @route /admins/:id
// @access Private
exports.deleteAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};
