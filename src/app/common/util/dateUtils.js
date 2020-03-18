export const convertDate = str => {
  let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2),
    time = date.getHours() + ": " + date.getMinutes();
  let formattedDate = [date.getFullYear(), mnth, day].join("-");
  return [formattedDate, time].join(" ");
};
