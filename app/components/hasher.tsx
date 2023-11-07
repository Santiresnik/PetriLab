import * as crypto from 'crypto';

export default function hashString(inputString: string): string {
    const sha256Hash = crypto.createHash('sha256');
    sha256Hash.update(inputString);
    return sha256Hash.digest('hex');
}