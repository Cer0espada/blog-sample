import {BlogFilteredActions, DropDownInputs, BlogFilteredEnum, BlogClassEnum} from '../actions';


const InitialState:DropDownInputs = { named: 'All Categories', classed: 'regular' };

export const blogFilteredReducer = (state:DropDownInputs = InitialState, action:BlogFilteredActions) => {


    switch(action.type){
        case BlogFilteredEnum.AllCategories:
            return {named:BlogFilteredEnum.AllCategories, classed:BlogClassEnum.Regular}
        case BlogFilteredEnum.HappeningNow:
            return { named: BlogFilteredEnum.HappeningNow, classed: BlogClassEnum.HappeningNow }
        case BlogFilteredEnum.FinancialLiteracy:
            return { named: BlogFilteredEnum.FinancialLiteracy, classed: BlogClassEnum.FinancialLiteracy }
        case BlogFilteredEnum.Education:
            return { named: BlogFilteredEnum.Education, classed: BlogClassEnum.Education}
        case BlogFilteredEnum.Prosparity:
            return { named: BlogFilteredEnum.Prosparity, classed:BlogClassEnum.Prosparity }
        default:
            return state
    }

    
}
