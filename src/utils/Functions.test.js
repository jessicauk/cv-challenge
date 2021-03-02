import { formatDate, getDateFull, monthPeriodDate } from "./Functions";

describe("Date Functions", () => {
  test("It should return year date format", () => {
    const date = "Mon Nov 25 2019 07:30:16 GMT+0000";
    const dateFormat = "2019";
    expect(formatDate(date)).not.toBe(null);
    const dateWithFormat = formatDate(date);
    expect(dateWithFormat).toBe(dateFormat);
  });

  test("It should return full year date format", () => {
    const date = "Mon Nov 25 2019 07:30:16 GMT+0000";
    const dateFormat = "2019-10-25";
    expect(getDateFull(date)).not.toBe(null);
    const dateWithFormat = getDateFull(date);
    expect(dateWithFormat).toBe(dateFormat);
  });
});
