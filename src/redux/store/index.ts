import {DropDownInputs, BlogFilteredEnum, BlogSortEnum, BlogClassEnum, SlateToolBarState} from '../actions'
import { initialStateSlate} from '../reducers/SlateToolBarReducer';
export interface StoreState {
    blogFiltered: DropDownInputs,
    blogSorted: DropDownInputs
    slateToolBar: SlateToolBarState
}

export const initialState:StoreState = {
    blogFiltered: {named: BlogFilteredEnum.AllCategories, classed: BlogClassEnum.Regular},
    blogSorted: {named:BlogSortEnum.Recent, classed: BlogClassEnum.Regular},
    slateToolBar: initialStateSlate
}
