import mongoose from 'mongoose';

const centerSchema = new mongoose.Schema(
  {
    regulation: {
      type: Object,
      // required: true,
    },
    pgs: {
      type: Object,
    },
    cgap: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Center = mongoose.models.Center || mongoose.model('Center', centerSchema);

export default Center;
