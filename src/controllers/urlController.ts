import { isValidURL } from "../utils/isValidURL";
import { generateHash } from "./generateHash";

export async function createURLController( req, res ) {
    const { url } = req.body

    const isValid = isValidURL(url)

    if ( ! isValid ) {
        return res.status(400).json({message: "Invalid URL"});
    }

    const hash = generateHash()

    return res.status(200).json({message: 'Success!', data: { url: `${hash}`}});
}