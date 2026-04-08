import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameJP: {
      type: String,
    },
    position: {
      type: String,
    },
    positionJP: {
      type: String,
    },
    facebook: {
      type: String,
    },
    line: {
      type: String,
    },
    youtube: {
      type: String,
    },
    instagram: {
      type: String
    },
    image: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default Employee;
