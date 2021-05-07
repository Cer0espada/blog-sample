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

// export interface Recent{
//     type:BlogSortActionTypes.Recent;
//     payload:DropDownInputs
// }