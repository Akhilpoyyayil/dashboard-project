import { DATA_LOADING } from "./constants";

export const dashboardDataLoading = ()=>(dispatch) => {
    dispatch( {type: DATA_LOADING });
};

// export const dashboardDataLoadings = ()=> {
//   return({type: DATA_LOADING });
// };
