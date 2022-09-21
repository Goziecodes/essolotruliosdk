// // import axios from "axios";
// import { Axios } from "axios";

// const axios = new Axios({
// baseURL: 'http://localhost:3000',
//   // headers: {  
//   //   ContentType: "multipart/form-data"
//   // }
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// async function handler(req, res) {
//   // let nestorlurl = 'https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkverify';
//   let nestorlurl = 'http://localhost:3000/trulio/sdkverifyasync';
//   if (req.method == "POST") {
//     console.log(req.file,'im a post')
//     try {
//       console.log('calling')
//       const {data}  = await axios.post('/trulio/sdkverify', req, {
//         responseType: "stream",
//         headers: {
//           "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
//         },
//       });
//       console.log(Object.keys(data), 'data')
//       // console.log(data, 'data')
//       data.pipe(res);
//       // res.json({message: 'done'})
//     } catch (error) {
//       console.log(error.isAxiosError)
//       console.log(typeof error.response)
//       // console.log(Object.keys(error.response.data))
//       console.log(error, 'error.response.data:')
//       return res.status(405).json({ message: "eroor" });

//     } 
//   } else {
//     console.log('im the else')
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

// export default handler;

import axios from 'axios';

const configKeys = `EsSolo_Live_DocV_API:Essolodocv@1`;
const buff = Buffer.from(configKeys);
  const base64Token = buff.toString('base64');
  console.log(base64Token, 'base64token')

export default async function handler(req, res) {
  // console.log(req.body, 'mmmmm')
  try {
    const result = await axios.post(
      // "https://api.globaldatacompany.com/verifications/v1/verify",
      //  "https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkVerify",
       "https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkverifyasync",
  //  "http://localhost:3000/trulio/sdkverifyasync",
   req.body,
    );
    console.log(result, 'res me')
    return res.status(200).json(result.data);
  } catch (error) {
    const message = error?.response?.data ?? 'error occured'
    const status = error?.response?.status ?? 400
    // console.log(error.response.statusText, 'error')
    // console.log(Object.keys(error.response), 'error')
    res.status(status).json(message)
  }      
  }

  export const config = {
    api: {
        bodyParser: {
            sizeLimit: '350mb' // Set desired value here
        }
    }
}