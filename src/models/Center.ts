import mongoose from 'mongoose';

const centerSchema = new mongoose.Schema(
  {
    regulation: {
      type: Object,
      // required: true,
    },
  
  },
  {
    timestamps: true,
  }
);

const Center = mongoose.models.Center || mongoose.model('Center', centerSchema);

export default Center;
