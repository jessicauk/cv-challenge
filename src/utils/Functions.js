import moment from 'moment';
export const formatDate = (registred = "Tue Nov 27 2018 07:30:16 GMT+0000") => {
  const date = new Date(registred);
  const year = date.getFullYear();
  return `${year}`;
};
export const getDateFull = (dateFull = "") => {
  const date = dateFull ? new Date(dateFull) : new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  return `${year}-${month}-${day}`;
};
export const monthPeriodDate = (startDate = "", endDate = "") => {
    const result = [];
    const dateStart = moment(endDate || new Date());
    const dateEnd = moment(startDate || new Date());

    while (dateStart.isBefore(dateEnd)) {
        result.push(dateStart.format("YYYY-MM-01"));
        dateStart.add(1, 'month');
    }
  return result.length;
};

export const getIcon = (type, id) => {
    let isFirst = true;
    let icon = "";
    if (type === 'school' && id === 0) {
        icon = process.env.PUBLIC_URL + "/assets/group.png";
    } else if (type === 'job' && id === 0) {
        icon = process.env.PUBLIC_URL + "/assets/portfolio.png";
    } else {
        isFirst = false
        icon = process.env.PUBLIC_URL + "/assets/ellipse.png";
    } 
    return { icon, isFirst };
} 
