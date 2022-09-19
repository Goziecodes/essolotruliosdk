// import axios from "axios";
import { Axios } from "axios";
// import axios as Axios from "axios";


const axios = new Axios({
baseURL: 'http://localhost:3000',
  // headers: {  
  //   ContentType: "multipart/form-data"
  // }
})

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  // let nestorlurl = 'https://tmp-msia-appgw.azure-api.net/nestor/trulio/sdkverify';
  let nestorlurl = 'http://localhost:3000/trulio/sdkverifyasync';
  if (req.method == "POST") {
    console.log(req.file,'im a post')
    try {
      console.log('calling')
      const {data}  = await axios.post('/trulio/sdkverify', req, {
        responseType: "stream",
        headers: {
          "Content-Type": req.headers["content-type"], // which is multipart/form-data with boundary included
        },
      });
      console.log(Object.keys(data), 'data')
      // console.log(data, 'data')
      data.pipe(res);
      // res.json({message: 'done'})
    } catch (error) {
      console.log(error.isAxiosError)
      console.log(typeof error.response)
      // console.log(Object.keys(error.response.data))
      console.log(error, 'error.response.data:')
      return res.status(405).json({ message: "eroor" });

    } 
  } else {
    console.log('im the else')
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;

