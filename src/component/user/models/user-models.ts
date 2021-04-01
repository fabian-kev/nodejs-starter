import { Document } from "mongoose";
///entity for database
export interface UserDocument extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

///business model
export interface User {
    email: string;
    firstName: string;
    lastName: string;
}

export interface UserResponse {
    email: string;
    name: string,
    last_name: string,
    first_name: string
}

export interface UserForm {
    email: string;
    name: string,
    last_name: string,
    first_name: string
}