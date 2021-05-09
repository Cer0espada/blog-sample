import { Store } from 'antd/lib/form/interface';
import {combineReducers} from 'redux';
import { DropDownInputs } from '../actions';
import {blogFilteredReducer} from './BlogFilteredReducer';
import {BlogSortedReducer} from './BlogSortedReducer';
import {SlateToolBarReducer} from './SlateToolBarReducer'
import {StoreState} from '../store'

export const reducers  = combineReducers<StoreState>({
    blogFiltered:blogFilteredReducer,
    blogSorted:BlogSortedReducer,
    slateToolBar: SlateToolBarReducer 
})