export const RETURN_DATE = 'RETURN_DATE';
export const RETURN_MONTH_NAME = 'RETURN_MONTH_NAME';
export const RETURN_DAY_NAME = 'RETURN_DAY_NAME';
export const SET_DAY_NAME = 'SET_DAY_NAME';
export const SET_MONTH_NAME = 'SET_MONTH_NAME';

export const setDayOfWeek = () => (dispatch) => {
    let day;

    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }

    dispatch({ type: SET_DAY_NAME, payload: day });
};

export const setMonth = () => (dispatch) => {
    let month;

      switch (new Date().getMonth()) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
           month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "December";
          break;
      }
    dispatch({ type: SET_MONTH_NAME, payload: month })
}