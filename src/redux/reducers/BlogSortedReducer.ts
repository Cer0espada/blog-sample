import { Action } from 'redux';
import {BlogSortActionTypes, DropDownInputs, BlogSortEnum, BlogClassEnum} from '../actions';

const initialState:DropDownInputs = {named:"Recent", classed:"regular"}

export const BlogSortedReducer = (state:DropDownInputs = initialState, action:Action): DropDownInputs =>{
    switch(action.type){
        case BlogSortEnum.Recent:
            return {named: BlogSortEnum.Recent, classed: BlogClassEnum.Regular}
        case BlogSortEnum.Trending:
            return { named: BlogSortEnum.Trending, classed: BlogClassEnum.Regular}
        default:
            return state
    }
}