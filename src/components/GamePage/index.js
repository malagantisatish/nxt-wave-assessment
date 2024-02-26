import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import TileCard from "../TileCard"
import "./index.css"

const tilesData = [
    {id:0,category:"tile1",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/party-popper_emoji%20(1).avif?updatedAt=1708925662489",isClicked:false},
    {id:1,category:"tile1",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/party-popper_emoji%20(1).avif?updatedAt=1708925662489",isClicked:false},
    {id:2,category:"tile1",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/party-popper_emoji%20(1).avif?updatedAt=1708925662489",isClicked:false},
    {id:3,category:"tile2",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji2%20(1).jpg?updatedAt=1708925662777",isClicked:false},
    {id:4,category:"tile2",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji2%20(1).jpg?updatedAt=1708925662777",isClicked:false},
    {id:5,category:"tile2",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji2%20(1).jpg?updatedAt=1708925662777",isClicked:false},
    {id:6,category:"tile3",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji3%20(1).png?updatedAt=1708925662840",isClicked:false},
    {id:7,category:"tile3",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji3%20(1).png?updatedAt=1708925662840",isClicked:false},
    {id:8,category:"tile3",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji3%20(1).png?updatedAt=1708925662840",isClicked:false},
    {id:9,category:"tile4",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji4.png?updatedAt=1708924662148",isClicked:false},
    {id:10,category:"tile4",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji4.png?updatedAt=1708924662148",isClicked:false},
    {id:11,category:"tile4",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji4.png?updatedAt=1708924662148",isClicked:false},
    {id:12,category:"tile5",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji5.png?updatedAt=1708924662595",isClicked:false},
    {id:13,category:"tile5",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji5.png?updatedAt=1708924662595",isClicked:false},
    {id:14,category:"tile5",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji5.png?updatedAt=1708924662595",isClicked:false},
    {id:15,category:"tile6",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji6.png?updatedAt=1708924662144",isClicked:false},
    {id:16,category:"tile6",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji6.png?updatedAt=1708924662144",isClicked:false},
    {id:17,category:"tile6",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji6.png?updatedAt=1708924662144",isClicked:false},
    {id:18,category:"tile1",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/party-popper_emoji%20(1).avif?updatedAt=1708925662489",isClicked:false},
    {id:19,category:"tile2",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji2%20(1).jpg?updatedAt=1708925662777",isClicked:false},
    {id:20,category:"tile3",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji3%20(1).png?updatedAt=1708925662840",isClicked:false},
    {id:21,category:"tile4",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji4.png?updatedAt=1708924662148",isClicked:false},
    {id:22,category:"tile5",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji5.png?updatedAt=1708924662595",isClicked:false},
    {id:23,category:"tile6",imageUrl:"https://ik.imagekit.io/Satish108/nxtwave%20Assessment%20on%20react/emoji6.png?updatedAt=1708924662144",isClicked:false}
]

let timerId;

class GamePage extends Component{
    state={username:"",gameStarted:false,score:0,seconds:0,minutes:0,tilesList:tilesData,selectedList:[]}

    getTheUsername=event=>{
        this.setState({username:event.target.value})
    }

    startTheTimer=()=>{
        timerId=setInterval(this.tick,1000)
    }


    tick=()=>{
       this.setState(prevState=>{
        let {minutes,seconds}=prevState
        if (seconds===59){
                minutes++
                seconds = 0
        }
        else{
            seconds++
        }
        return {minutes,seconds}
       })
      
    }


     getTheShuffleList = () => {
        const {tilesList} = this.state
        return tilesList.sort(() => Math.random() - 0.5)
      }

    startThegame=event=>{
        event.preventDefault()
        const shuffleTilesList = this.getTheShuffleList()
        this.setState({gameStarted:true,tilesList:shuffleTilesList})
        this.startTheTimer()
    }

    renderTheUserLogin=()=>{
        const {username}=this.state
        return (
        <div className="entering-name-page">
            <h1>React Tiles</h1>
            <form className="form-container" onSubmit={this.startThegame}>
                <label htmlFor="username" className="label-text">Enter Your Name</label>
                <br/>
                <input type="text" id="username" value={username} className="input-value" onChange={this.getTheUsername}/>
                <br/>
                <button type="submit" className="play-btn">Play</button>
            </form>
        </div>
    )}

    checkTheLengthOfSelectedList=()=>{
        const {selectedList,tilesList} = this.state
        if (selectedList.length===tilesList.length){
            clearInterval(timerId)
        }
    }


    getTheScore=()=>{
        const {selectedList,tilesList} = this.state
        const len = selectedList.length
        if (len>1){
            const lastOne = selectedList[len-1]
            const lastSecond = selectedList[len-2]
            if (lastOne.category===lastSecond.category){
                this.setState(prevState=>({score:prevState.score+1}),this.checkTheLengthOfSelectedList)
            }
            else{
                this.setState(prevState=>({score:prevState.score-1}),this.checkTheLengthOfSelectedList)
            }
        }

        
       
    }



    chanegStatus=props=>{
        const {id,category,imageUrl,isClicked}=props
        const {tilesList,selectedList} = this.state
        const updatedList = tilesList.map(each=>{
            if (each.id===id){
                return {id:each.id,category:each.category,imageUrl:each.imageUrl,isClicked:true}
            }
            return each
        })

        const selectedTile = {id,category,imageUrl,isClicked}

        const isInclude = selectedList.some(each=>each.id===id)
        console.log(isInclude)
        if (!isInclude){
            this.setState(prevState=>({selectedList:[...prevState.selectedList,selectedTile],tilesList:updatedList}),this.getTheScore)
        }
        else{
            this.setState({tilesList:updatedList},this.getTheScore)
        }
    }

    renderTheCards=()=>{
        const {score,tilesList}=this.state
        return(
            <ul className="tiles-container">
              {tilesList.map(each=>(
                <TileCard key={each.id} tileDetails={each} chanegStatus={this.chanegStatus}/>
              ))}
            </ul>
        )
    }

    renderTheGamePage=()=>{
        const {username,score,seconds,minutes,selectedList,tilesList}=this.state
        return(
            <div className="game-started-page">
                    <h1>Mahjong Game</h1>
                    <div className="score-time-container">
                       <p>Score: <span>{score}</span></p>
                       <p>Time:{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</p>
                    </div>
                    <div className="game-board">
                        <p className="username">Welcome <span>{username}</span></p>
                        {selectedList.length===tilesList.length?this.renderTheResult():this.renderTheCards()}
                    </div>
            </div>
        )
    }

    renderTheResult=()=>{
        const {score,minutes,seconds}=this.state
        return(
            <>
            <h1 className="game-finished-heading">Game Finished!</h1>
            <p className="final-result">Score:{score}</p>
            <p className="time-taken">Time Taken:{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</p>
            </>
        )
    }



    render(){
        const {gameStarted} = this.state
        return <>
        <div className="game-page-container">
            {gameStarted?(this.renderTheGamePage()):(this.renderTheUserLogin())}
        </div>
        </>
    }
}


export default GamePage