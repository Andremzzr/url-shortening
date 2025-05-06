import { isValidURL } from "../utils/isValidURL";
import { generateHash } from "./generateHash";
import * as dbService from "../services/PgsqlService";
export async function createURLController( req, res ) {
    const { url } = req.body

    const isValid = isValidURL(url)

    if ( ! isValid ) {
        return res.status(400).json({message: "Invalid URL"});
    }

    const hash = generateHash(url)

    return res.status(200).json({message: 'Success!', data: { url: `${hash}`}});
}

export async function getURL(req, res) {
    const { hash } = req.params;

}