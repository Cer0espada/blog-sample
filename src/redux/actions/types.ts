import Paragraph from "antd/lib/skeleton/Paragraph";
import { Action } from "redux";

export interface DropDownInputs {
    named: string;
    classed: string;
}

export enum BlogFilteredEnum{
    AllCategories = "All Categories",
    Education = "Education",
    FinancialLiteracy = "Financial Literacy",
    HappeningNow= "Happening Now",
    BlackFemaleExcellence = "Black Female Excellence",
    Prosparity ="Prosparity"
}

//Filtered
export type AllCategories = "All Categories";
export type Education ="Education";
export type FinancialLiteracy ="Financial Literacy";
export type HappeningNow = "Happening Now";
export type BlackFemaleExcellence = "Black Female Excellence";
export type Prosparity = "Prosparity";

export type BlogFilteredActionTypes = 
    AllCategories|
    Education|
    FinancialLiteracy|
    HappeningNow|
    BlackFemaleExcellence|
    Prosparity


export interface BlogFilteredActions {
    type: BlogFilteredActionTypes,
    payload: DropDownInputs
}
//sorted

export type Recent = "Recent";
export type Trending = "Trending";

export type BlogSortActionTypes= Recent|Trending;

export enum BlogSortEnum {
    Recent="Recent",
    Trending="Trending"
}

export interface BlogSortAction{
    type:BlogSortAction,
    payload:DropDownInputs
}
export enum BlogClassEnum{
    Regular="regular",
    HappeningNow="happening-now",
    FinancialLiteracy="financial-literacy",
    BlackFemaleExcellence="black-female-excellence",
    Education="education",
    Prosparity="prosparity"
}
////////////////Toolbar

export enum SlateToolBarEnum{
    HeadingOff="HeadingOff",
    HeadingOn = "HeadingOn",
    Paragraph ="Paragraph",
    ItalicsOn = "ItalicsOn",
    ItalicsOff = "ItalicsOff",
    UnderlineOn = "UnderlineOn",
    UnderlineOff = "UnderlineOff",
    Image = "Image",
    QuoteOn = "quoteOn",
    QuoteOff = "quoteOff",
    EmbedOn = "embedOn",
    EmbedOff = "embedOff",
    BoldOn = "boldOn",
    BoldOff = "boldOff"
}

export interface SlateToolBarAction extends Action{
    type:string;
    payload:SlateImageState
}

export interface SlateToolBarState {
    heading: boolean,
    paragraph: boolean,
    italics: boolean,
    underline: boolean,
    image: SlateImageState,
    quote: boolean,
    embed: boolean,
    bold: boolean
}

export interface SlateImageState {
    imageName: string,
    imagePreview: Object | File,
    image: Object | File
}