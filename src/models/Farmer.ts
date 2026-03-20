import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ward: {
      type: Object,
    },
    state: {
      type: Object,
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
    video: { type: Object },
    popularProduct: [],
    whyTitle: { type: String },
    whyContent: [],
    gallery: [],
    avatar: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Farmer = mongoose.models.Farmer || mongoose.model('Farmer', farmerSchema);

export default Farmer;
