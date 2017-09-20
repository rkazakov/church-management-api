import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: false,
  },
  // media: { type: Schema.Types.ObjectId, ref: 'Media' },
  // likes : [{ type: Schema.Types.ObjectId, ref: 'Like' }],
  // comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  // flags : [{ type: Schema.Types.ObjectId, ref: 'Flag' }]
  //  _user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

const MemberModel = mongoose.model('Member', MemberSchema);

export default MemberModel;
