import React from 'react'

interface Props {
    id: number;
    frames:any;
    ranges: string[];
}

const noImage = './click_to_image.jpg'


const isExist = (arr: string[], value: number) : boolean => {
    const length = arr.length
    if (length == 0) {
        return false
    }
    const index = Math.floor(length / 2 )
    const range = arr[index].split(':')
    const start = +range[0]
    const end = +range[1]

    if (start > value ){
        return isExist(arr.slice(0,index), value)
    } else if (end < value) {
        return isExist(arr.slice(index + 1), value)
    }
    return true
}

class ThumbnailItem extends React.Component<Props, any>{
    canvasEle: any;
    canvas: React.RefObject<unknown>;
    
}