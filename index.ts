export interface IShareData {
    title?: string,
    text?: string,
    url?: string,
    files?: File[]
}

export interface ILinkPreviewInfo {
    title: string,
    description: string,
    imageUrl: string,
    targetUrl: string
}

export function canUseShare(shareData?: IShareData): boolean {
    try {
        if (!shareData) {
            return navigator && navigator.canShare && navigator.canShare();
        }

        return navigator && navigator.canShare && navigator.canShare(shareData);
    } catch (err) {
        return false;
    }
}

export function share(shareData: IShareData): Promise<void> {
    return navigator.share(shareData);
}

export async function generateUrl(linkPreviewInfo: ILinkPreviewInfo): Promise<string> {
    const option = {
        method: 'POST',
        body: JSON.stringify(linkPreviewInfo),
    }
    return new Promise((resolve, reject) => {
        fetch('https://socialshare.link/api/generator_url', option)
            .then(async res => {
                resolve(await res.json().then(res => res.url));
            })
            .catch(err => {
                reject(err);
            })
    })
}