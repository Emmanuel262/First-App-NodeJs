/* eslint-disable */
const mongoose = require('mongoose');
const slugify = require('slugify');

const ibikoreshoSchema = new mongoose.Schema(
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
    imageCover: {
      type: String,
      required: [true, 'Inzu ikenera ifoto'],
    },
    images: [String],
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
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate
// tourSchema.virtual('reviews', {
// 	ref: 'Review',
// 	foreignField: 'tour',
// 	localField: '_id'
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
ibikoreshoSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Embeding
// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);

//   next();
// });

// tourSchema.pre('save', function (next) {
//   console.log('Will save document....');
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// tourSchema.pre('find', function (next) {
// tourSchema.pre(/^find/, function(next) {
// 	this.find({ secretTour: { $ne: true } });

// 	this.start = Date.now();
// 	next();
// });

// tourSchema.pre(/^find/, function(next) {
// 	this.populate({
// 		path: 'guides',
// 		select: '-__v -passwordChangedAt'
// 	});

// 	next();
// });

// tourSchema.post(/^find/, function(docs, next) {
// 	console.log(`Query took ${Date.now() - this.start} milliseconds`);

// 	next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
// 	this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
// 	console.log(this.pipeline());
// 	next();
// });

const Ibikoresho = mongoose.model('Ibikoresho', ibikoreshoSchema);

module.exports = Ibikoresho;
