import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Try } from './../models/try.model'
import { AddTry, RemoveTry } from "../actions/try.actions";
import { state } from "@angular/animations";
import { getSafePropertyAccessString } from "@angular/compiler";


export class TryStateModel {
    try: Try[] | undefined
}

@State<TryStateModel>({
    name:'try',
    defaults: {
        try: []
    }
})

export class TryState {
    @Selector()
    static getTry(state: TryStateModel) {
        return state.try
    }

    @Action(AddTry)
    add({ getState, patchState }: StateContext<TryStateModel>, { payload }:AddTry) {
        const state = getState();
        if (state.try)
        patchState({
            try:  [...state.try  , payload]
        })
    }

    @Action(RemoveTry)
    remove({getState, patchState}: StateContext<TryStateModel>,{ payload }: RemoveTry) {
        patchState({
            try: getState().try?.filter(a => a.name != payload)
            
        })
    }

}



