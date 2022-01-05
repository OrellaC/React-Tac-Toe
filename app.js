
// React Class Component
//Syntax
//AlWAYS capitalize your components

//Header
class Header extends React.Component {
    render() {
        return (
            <div className="title">
            <h1> React Tac Toe</h1>
            </div>
        )

    }
}
//Player One
class Player extends React.Component {
    //needs render method along with a return
    render() {
        return (
            <div className="player">
                <h3> Player </h3>
                <h4> Wins:</h4>
            </div>
        )

    }
}

// Player Two
class BothPlayers extends React.Component{
    render(){
        return(
        <div className="both-players">
            <Player />
            <Player />
</div>
        )
    }
}

{/* boxes */}
class Boxes extends React.Component{
    render(){
        return(
            <div className="boxes">
            </div>
        )
    }
}
//Board
class Board extends React.Component {
    //needs render method along with a return
    render() {
        return (
            <div className="board">
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
                <Boxes />
            </div>
        )

    }
}


class App extends React.Component {
    //needs render method along with a return
    render() {
        return (
            <div>
                <Header />
                {/* <Player /> */}
               <BothPlayers />
                <div className="boxes">
                <Board />
            </div>
            </div>
        )

    }
}

//Renders Our component 
ReactDOM.render(
    //We render component by writing it as a html element 
    <App />,
    document.querySelector("#container")
)