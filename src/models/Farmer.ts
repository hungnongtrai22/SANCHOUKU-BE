import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameJP: {
      type: String,
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
    nameFarmJP: {
      type: String,
    },
    shortIntroduce: {
      type: String,
    },
    shortIntroduceJP: {
      type: String,
    },
    aboutFarmTitle: {
      type: String,
    },
    aboutFarmTitleJP: {
      type: String,
    },
    aboutFarmContent: {
      type: String,
    },
    aboutFarmContentJP: {
      type: String,
    },
    category: [],
    categoryJP: [],
    video: { type: Object },
    popularProduct: [],
    whyTitle: { type: String },
    whyTitleJP: { type: String },
    whyContent: [],
    whyContentJP: [],
    gallery: [],
    avatar: {
      type: Object,
    },
    status: {
      type: String,
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Farmer = mongoose.models.Farmer || mongoose.model('Farmer', farmerSchema);

export default Farmer;
