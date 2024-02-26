import "./index.css"

const TileCard=props=>{
    const {tileDetails,chanegStatus} = props
    const {id,imageUrl,isClicked,category}=tileDetails
    const clikedTheImage=()=>{
            chanegStatus(tileDetails)
    }

    return (
        <li className="tile-container">
            <button className="tile-btn" onClick={clikedTheImage}>
                {isClicked?<img src={imageUrl} alt={category} className="tile-image"/>:""}
            </button>
        </li>
    )
}


export default TileCard