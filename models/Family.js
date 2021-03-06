const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChildSchema = require('./ChildSchema');
const ChoreSchema = require('./ChoreSchema');

const FamilySchema = new Schema({
  familyName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  children: [ChildSchema],
  chores: [ChoreSchema("unassigned")],
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Family = mongoose.model('families', FamilySchema);
module.exports = Family;