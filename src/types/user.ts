import { IPermissions } from './permission';

export interface IUser {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    profileImage?: string;
    isActive?: boolean;
    password?: string;
    role?: 'admin' | 'superAdmin' | 'user'
    permissions: IPermissions
}