export const RETURN_DATE = 'RETURN_DATE';
export const RETURN_MONTH_NAME = 'RETURN_MONTH_NAME';
export const RETURN_DAY_NAME = 'RETURN_DAY_NAME';
export const SET_DAY_NAME = 'SET_DAY_NAME';
export const SET_MONTH_NAME = 'SET_MONTH_NAME';
export const SET_TEMP = 'SET_TEMP';

export const setDayOfWeek = () => (dispatch) => {
  const date = (new Date().getDay());
  let day;

    if(date === 0){
      day = "Sunday";
    }else if(date === 1){
      day = "Monday";
    }else if(date === 2){
      day = "Tuesday";
    }else if(date === 3){
      day = "Wednesday";
    }else if(date === 4){
      day = "Thursday";
    }else if(date === 5){
      day = "Friday";
    }else if(date === 6){
      day = "Saturday";
    }

    dispatch({ type: SET_DAY_NAME, payload: day });
};

export const setMonth = () => (dispatch) => {
  const date = (new Date().getMonth());
  let month;

    if (date === 0){
      month = "January";
    }else if(date === 1){
      month = "February";
    }else if(date === 2){
      month = "March";
    }else if(date === 3){
      month = "April";
    }else if(date === 4){
      month = "May";
    }else if(date === 5){
      month = "June";
    }else if(date === 6){
      month = "July";
    }else if(date === 7){
      month = "August";
    }else if(date === 8){
      month = "September";
    }else if(date === 9){
      month = "October";
    }else if(date === 10){
      month = "November";
    }else if(date === 11){
      month = "December";
    }

    dispatch({ type: SET_MONTH_NAME, payload: month })
}