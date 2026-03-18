import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
    },
    state: {
      type: String,
    },
    address: {
      type: String,
    },
    rating: {
      type: Number,
    },
    nameFarm: {
      type: String,
    },
    shortIntroduce: {
      type: String,
    },
    aboutFarmTitle: {
      type: String,
    },
    aboutFarmContent: {
      type: String,
    },
    category: [],
    video: { type: String },
    popularProduct: [],
    whyTitle: { type: String },
    whyContent: [],
    gallery: [],
  },
  {
    timestamps: true,
  }
);

const Farmer = mongoose.models.Farmer || mongoose.model('Farmer', farmerSchema);

export default Farmer;
