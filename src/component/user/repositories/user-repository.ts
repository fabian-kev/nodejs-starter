import { Repository } from "../../common/repository/repository";
import mongoose, { Document, model, Model, Schema } from 'mongoose';
import { UserDocument } from "../models/user-models";
import { injectable } from "inversify";

const UserSchema:Schema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type: String,
        unique:true,
        required:true
    }
})
export const UserModel: Model<UserDocument> = model('User', UserSchema);

export interface UserRepository extends Repository<UserDocument> {
}

@injectable()
export class UserRepositoryImpl implements UserRepository {
    findById(id: any): Promise<UserDocument> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: any) {
        throw new Error("Method not implemented.");
    }
    save(docs: UserDocument): Promise<UserDocument> {
       return UserModel.create(docs)
    }
    async findAll(): Promise<UserDocument[]> {
        return UserModel.find()
    }
}

