import { createAction, props } from "@ngrx/store";
import { User } from "../Models/User";



export const ProvideUsers=createAction('Provide Users',props<{users: User[]}>());
export const GetById=createAction('GetbyId',props<{id: number}>());