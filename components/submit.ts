import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";


type SheetForm = {
    name: string
    email: string
    phone: string
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST')
     {
         return res.status(405)
     }

     const body = req.body as SheetForm

     try {
    //preparar auth
    const auth = new google.auth.GoogleAuth( opts: {
        credentials: {
            client_email: procces.env.GOOGLE_CLIENT_EMAIL
        }
    })
     } catch(e) {

     }
}
