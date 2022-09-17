import axios from "axios";
export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  let nestorlurl = 'https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkverify';
  // let nestorlurl = 'http://localhost:3000/trulio/sdkverify';
  if (req.method == "POST") {
    const { data } = await axios.post(nestorlurl, req, {
      responseType: "stream",
      headers: {
        "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
      },
    }).catch(err => {
      console.log(err, 'errororororo1')
      console.log(err.response, 'errororororo1')
      res.status(400).json(error);

    });
    data.pipe(res);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;






// import axios from 'axios';

// const configKeys = `EsSolo_Live_DocV_API:Essolodocv@1`;
// const buff = Buffer.from(configKeys);
//   const base64Token = buff.toString('base64');
//   console.log(base64Token, 'base64token')

// export default async function handler(req, res) {
//   // console.log(req.body)
//   const result = await axios.post(
//           // "https://api.globaldatacompany.com/verifications/v1/verify",
//            "https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkverify",
//       //  "http://localhost:3000/trulio/sdkverify",
//           req.body,
//           {
//             headers: {
//               Authorization: `Basic ${base64Token}`,
//               // Authorization: `Basic RXNTb2xvX0RlbW9fRG9jVl9BUEk6VHJ1bGlvb0BAMQ==`,
//             }
//           }
//         )
//         .catch((error) => {
//           console.log(error, 'error o')
//           console.log(error.response, 'error.response o')
//           res.status(400).json(error);

//         }
//           )
//         // .then((res) => console.log(res, 'res o'))
//         // .then((res) => res.data)

//     // Get data from your database
//     // console.log(result, 'resultt')
//     res.status(200).json(result.data);
//     // res.status(200).json({users: [{name: 'John'}, {name: 'Jane'}]});
//   }

//   export const config = {
//     api: {
//         bodyParser: {
//             sizeLimit: '350mb' // Set desired value here
//         }
//     }
// }

