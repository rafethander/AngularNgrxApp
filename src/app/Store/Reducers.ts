import { createReducer, on } from "@ngrx/store";
import { User } from "../Models/User";
import { GetById, ProvideUsers,  } from "./Actions";

const initialState: User[]=[];

export const userReducer=createReducer(
    initialState,
    on(
        GetById,(state,action)=>(state.filter(i=>i.id==action.id)),
    ),
    on(
        ProvideUsers,(state: User[]=[],action)=>(state=[...action.users]),
    )
)