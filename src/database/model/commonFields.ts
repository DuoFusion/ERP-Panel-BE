const mongoose = require("mongoose");

const commonFields = {
  isDeleted: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, default: null },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, default: null },
};

module.exports = commonFields;
