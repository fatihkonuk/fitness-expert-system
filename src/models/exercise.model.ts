import {Schema, model} from 'mongoose';

const ExerciseSchema = new Schema(
    {
        name: {type: String, required: true},
        slug: {type: String, unique: true},
        type: {
            type: String,
            enum: ['strength', 'cardio', 'flexibility', 'balance'],
            required: true,
        },
        equipment: {
            type: String,
            enum: ['dumbbell', 'barbell', 'kettlebell', 'machine', 'bodyweight'],
            required: true,
        },
        description: {type: String},
        imageUrl: {type: String},
        videoUrl: {type: String},
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
);
const ExerciseModel = model('Exercise', ExerciseSchema);
export default ExerciseModel;