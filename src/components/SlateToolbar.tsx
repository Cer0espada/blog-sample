import {useDispatch} from 'react-redux';

import {SlateToolBarEnum} from '../redux/actions/types'
import React,{Ref, PropsWithChildren, useReducer, useState, ChangeEvent, LegacyRef} from 'react';
import { Editor, Transforms, Element as SlateElement } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { Nullish } from '@testing-library/react';
import { CustomEditor, FormattedText } from './EditorSlate';

import SlateToolBarIcon from './SlateToolBarIcon'


const SlateToolBar = () =>{

    // const editor = useSlate();

    

    return(
        <div className="slate-tool-bar">
            <div className="slate-tool-bar-container">
                {/* <i className="fas fa-undo slate-tool-bar-container__icon"></i>
                <i className="fas fa-redo slate-tool-bar-container__icon"></i> */}
                <SlateToolBarIcon addedClass={"fas fa-bold"} name={"bold"}/>
                <SlateToolBarIcon addedClass={"fas fa-italics"} name={"italics"}/>
                <SlateToolBarIcon addedClass={"fas fa-underline"} name={"underline"} />
                <input 
                
                src="" 
                alt="" 
                name="mainImage" 
                type="file" 
                accept="image/png, image/jpeg, image/gif" />
                {/* <i className="fas fa-indent slate-tool-bar-container__icon"></i>
                <i className="fas fa-quote-right slate-tool-bar-container__icon"></i> */}
            </div>
        </div>
    )
}

export default SlateToolBar;