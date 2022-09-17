import axios from 'axios';
const FormData = require('form-data');


const configKeys = `EsSolo_Live_DocV_API:Essolodocv@1`;
const buff = Buffer.from(configKeys);
  const base64Token = buff.toString('base64');
  console.log(base64Token, 'base64token')

export default async function handler(req, res) {
const details = req.body;
  function getFormData(details) {
    const formData = new FormData();
    Object.keys(details).forEach(key => formData.append(key, details[key]));
    return formData;
}
const formData = getFormData(details);
//   Object.keys(req.body).reduce((formData, key) => {
//     formData.append(key, req.body[key]);
//     return formData;
// }, new FormData());

  const result = await axios.post(
    "http://localhost:3000/trulio/sdkverify",
          // "https://api.globaldatacompany.com/verifications/v1/verify",
          // req.body,
          formData,
          {
            headers: formData.getHeaders()
          }
          // {
          //   headers: {
          //     Authorization: `Basic ${base64Token}`,
          //     ['Content-type']: `text/json`,
          //     // Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
          //   }
          // }
        )
        .catch((error) => {
          console.log(error, 'error o')
          console.log(error.response, 'error.response o')
          return res.status(400).json(error);

        }
          )
        // .then((res) => console.log(res, 'res o'))
        // .then((res) => res.data)

    // Get data from your database
    // console.log(result, 'resultt')
    res.status(200).json(result.data);
    // res.status(200).json({users: [{name: 'John'}, {name: 'Jane'}]});
  }

  export const config = {
    api: {
        bodyParser: {
            sizeLimit: '35gb' // Set desired value here
        }
    }
}