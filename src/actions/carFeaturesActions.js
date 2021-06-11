export const ADD_NEW_FEATURE = "ADD_NEW_MEMBER";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (newFeature) => {
    return { type : ADD_NEW_FEATURE , payload : newFeature}
}

export const removeFeature = (delFeature) => {
    return { type : REMOVE_FEATURE , payload : delFeature}
}