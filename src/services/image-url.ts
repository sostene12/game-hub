
const getCroppedImageUrl = (url:string) => {
    const newUrl = url.replace('media/', 'media/crop/600/400/');

    // const index = url.indexOf('media/') + 'media/'.length;
    // return url.slice(0,index) + '/crop/600/400' + url.slice(index);
    return newUrl;
}

export default getCroppedImageUrl;