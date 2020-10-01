/* eslint-disable */
const mongoose = require('mongoose');
const slugify = require('slugify');

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Please provide a name of field'],
      unique: true,
      trim: true,
      maxlength: [40, "hasi y'inyuguti 40"],
    },
    slug: String,
    summary: {
      type: String,
      required: [true, 'Inzu ikenera ibirango'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: [String],
    imageIds: [String],
    cost: {
      type: String,
      required: [true, 'Igiciro kirakenewe'],
      default: 0,
    },
    nationality: String,
    intara: String,
    akarere: String,
    umurenge: String,
    akagari: String,
    videoLink: String,
    owner: String,
    size: Number,
    identifier: {
      type: String,
      required: [true, 'duhe aho duherereye'],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    visibility: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
dataSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Data', dataSchema);
