import config from '../../../config';


export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Philadelphia!A2:T",
        valueRenderOption: "UNFORMATTED_VALUE"
      })
      .then(
        response => {
          const data = response.result.values;
          const gyms =
            data.map(gym => ({
              name: gym[0],
              city: gym[1],
              description: gym[2],
              website: gym[3],
              address: gym[4],
              phone: gym[5],
              image: gym[6],
              hashtag: gym[7],
              submit: gym[8]
            })) || [];

          callback({
            gyms
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
