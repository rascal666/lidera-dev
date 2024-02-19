import {createSlice} from "@reduxjs/toolkit";


type reducerData = {
    isDropdown: boolean,
    isHamburger: boolean,
    menuArrayPortal: string[],
    menuArrayEducation: string[],
    menuArrayBusiness: string[],
    openedMenuId: number,
}



const initialState: reducerData = {
    isDropdown: false,
    isHamburger: false,
    menuArrayPortal: ['Продукты КМФ', 'Новости / Анонсы', 'О программе KMF Isker Hanymy', 'Истории успеха'],
    menuArrayEducation: ['Наставничество', 'Саморазвитие', 'Здоровье', 'Полезные советы'],
    menuArrayBusiness: ['Каталог', 'Made in KZ', 'Я социальный предприниматель'],
    openedMenuId: 0
}


export const reducerData = createSlice({
    name: 'reducerData',
    initialState,
    reducers: {
        isDropdownAction(state, action) {
            console.log(action.payload)
            state.isDropdown = action.payload
        },
        setId(state, action) {
            state.openedMenuId = action.payload
        },
        isHamburgerAction(state) {
            state.isHamburger = !state.isHamburger
        },


    }

});


export default reducerData.reducer
export const {isDropdownAction, setId, isHamburgerAction} = reducerData.actions