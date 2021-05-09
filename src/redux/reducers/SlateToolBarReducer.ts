import { Action } from 'redux';
import {SlateToolBarEnum, SlateToolBarAction, SlateToolBarState, SlateImageState} from '../actions/types';



export const initialStateSlate:SlateToolBarState = {
    heading: false,
    paragraph:false,
    italics: false,
    underline: false,
    image: {imageName:"", image:{}, imagePreview:{}},
    quote:false,
    embed:false,
    bold: false
}

export const SlateToolBarReducer = (state:SlateToolBarState = initialStateSlate, action:SlateToolBarAction) => {


    switch (action.type) {
        case SlateToolBarEnum.HeadingOn:
            return { ...state, heading: true }
        case SlateToolBarEnum.HeadingOff:
            return{...state, heading:false}
        case SlateToolBarEnum.Paragraph:
            return { ...state, paragraph: true }
        case SlateToolBarEnum.ItalicsOn:
            return { ...state, italics: true }
        case SlateToolBarEnum.ItalicsOff:
            return { ...state, italics: false }
        case SlateToolBarEnum.BoldOn:
            return{...state, bold:true}
        case SlateToolBarEnum.BoldOn:
            return { ...state, bold: false }
        case SlateToolBarEnum.UnderlineOn:
            return { ...state, underline: true }
        case SlateToolBarEnum.UnderlineOff:
            return { ...state, underline: false }
        case SlateToolBarEnum.Image:
            return { ...state, image: action.payload }
        case SlateToolBarEnum.QuoteOn:
            return { ...state, quote: true }
        case SlateToolBarEnum.QuoteOff:
            return { ...state, quote: false }
        case SlateToolBarEnum.EmbedOn:
            return { ...state, embed: true }
        case SlateToolBarEnum.EmbedOff:
            return { ...state, embed: false }
        default:
            return state
    }
}