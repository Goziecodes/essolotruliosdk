import axios from 'axios';

export default async function uploadHandler(req, res) {
    console.log('anyam', req.body.TransactionID)
  const result = await axios.post(
          "https://api.globaldatacompany.com/v1/docv/UploadImage",
          req.body,
          {
            headers: {
              Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
            }
          }
        )
        .then((res) => console.log(res.data, 'res o'))
        .then((res) => res.data)
        .catch((err) => console.log(err, 'err'))

    // Get data from your database
    // console.log(result.data, 'resultt')
    res.status(200).json(result);
    // res.status(200).json({users: [{name: 'John'}, {name: 'Jane'}]});
  }