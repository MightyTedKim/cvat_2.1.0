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
    constructor(props: Props){
        super(props)
        this.state = {
            isImageLoad: false
        }
        this.canvas = React.createRef()
    }

    shouldComponentUpdate(nextProps: Props, nextState: any) {
        if (nextState.isImageLoad){
            return false
        }else{
            return isExist(nextProps.ranges, nextProps.id)
        }
    }

    componentDidMount() {
        this.drawCanvas()
    }

    componentDidUpdate() {
        this.drawConvas()
    }

    drawConvas = () => {
        this.canvasEle = this.canvas.current
        this.canvasEle.width = 100
        this.canvasEle.height = 100
        const context = this.convasEle.getContext('2d')

        this.props.frames.get(this.props.id, false, 1).then((data:any) => {
            data.data().then((data:any) => {
                context.drawImage(data.imageData, 0,0,100,100)
                this.setState({isImageLoad: true})
            }).catch((error: any) => {
                const img = new Image()
                img.src = noImage
                img.onload = function(){
                    context.drawImage(img, 0,0,100,100)
                }
            })
        })
    }

    render(): React.ReactMode {
        return <canvas ref={this.canvas} style={{verticalAlign: 'bottom'}} />
    }
}

export default ThumbnailItem