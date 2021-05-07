import {DropDownInputs, BlogFilteredEnum, BlogSortEnum, BlogClassEnum} from '../actions'

export interface StoreState {
    blogFiltered: DropDownInputs,
    blogSorted: DropDownInputs
}

export const initialState:StoreState = {
    blogFiltered: {named: BlogFilteredEnum.AllCategories, classed: BlogClassEnum.Regular},
    blogSorted: {named:BlogSortEnum.Recent, classed: BlogClassEnum.Regular}
}
