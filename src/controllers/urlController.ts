import { isValidURL } from "../utils/isValidURL";
import { generateHash } from "./generateHash";
import databaseService from "../services/PgsqlService";

export async function createURLController( req, res ) {
    const { url } = req.body

    const isValid = isValidURL(url)

    if ( ! isValid ) {
        return res.status(400).json({message: "Invalid URL"});
    }

    const hash = generateHash(url);

    const createdUrl = databaseService.createURL(url, hash)

    if ( !createdUrl ) {
        return res.status(400).json({message: "Problem while shortcurting the URL"});
    }

    return res.status(200).json({message: 'Success!', data: { url: `${process.env.BASE_URL}/${hash}`}});

}

export async function getURL(req, res) {
    const { hash } = req.params;
    console.log(hash)
    
    if( !hash ) {
        return res.status(400).json({message: "Invalid hash"});
    }

    const getURL = await databaseService.getURL(hash);
    console.log("get url",getURL)

    if ( !getURL ) {
        return res.status(400).json({message: "URL was not found"});
    }

    res.status(301).redirect(getURL)

}