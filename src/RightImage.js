export default function RightImage({stage}) {
    const IMG_URL = [
        'https://assets.codepen.io/6060109/form-stage-1.png',
        'https://assets.codepen.io/6060109/form-stage-2.png',
        'https://assets.codepen.io/6060109/form-stage-3.png',
        'https://assets.codepen.io/6060109/form-stage-4.png'  
    ]

    return(
        <div 
        style={{backgroundImage: `url(${IMG_URL[stage]})`}}
        className="image">
        </div>
    )
}
  