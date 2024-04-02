import countries from "./stateAndCountry.json";
import categories from "./businessCategory.json";

export const processCountry = () => {
  const data = [{ key: "Select country", value: "Select country" }];
  for (let item of countries) {
    data.push({ key: item.country, value: item.country });
  }
  return data;
};

export const processState = (country = "") => {
  const data = [{ key: "Select state", value: "Select state" }];
  for (let item of countries) {
    if (country) {
      if (item.country === country) {
        for (let state of item.states) {
          data.push({ key: state, value: state });
        }
      }
    } else {
      for (let state of item.states) {
        data.push({ key: state, value: state });
      }
    }
  }

  return data;
};

export const processBusinessCategory = () => {
  const data = [
    { key: "Select business category", value: "Select business category" },
  ];
  for (let item of categories) {
    data.push({ key: item.key, value: item.value });
  }
  return data;
};
