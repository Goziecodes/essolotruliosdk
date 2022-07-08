import axios from 'axios';

const configKeys = `EsSolo_Live_DocV_API:Essolodocv@1`;
const buff = Buffer.from(configKeys);
  const base64Token = buff.toString('base64');
  console.log(base64Token, 'base64token')

export default async function handler(req, res) {
  // console.log(req.body)
  const result = await axios.post(
          "https://api.globaldatacompany.com/verifications/v1/verify",
          req.body,
          {
            headers: {
              Authorization: `Basic ${base64Token}`,
              // Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
            }
          }
        )
        .catch((error) => {
          console.log(error, 'error o')
          console.log(error.response, 'error.response o')
          res.status(400).json(error);

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
            sizeLimit: '35mb' // Set desired value here
        }
    }
}