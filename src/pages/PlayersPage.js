import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { AddPlayer } from '../redux/actions';

class PlayersPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameToAdd: ''
        }
    }

    render(){
        const {players} = this.props;
        return <div>
            {players && players.map((player, index) => {
                return <div>
                    <span>Joueur {index + 1} : {player.name}</span>
                </div>
            })}
            <div>
                <span>Joueur {players.length + 1} : </span>
                <input onKeyPress={(event) => event.code.includes('Enter') ? this.addPlayer() : false} value={this.state.nameToAdd} type="text" onChange={this.nameChanged.bind(this)} />
                <button onClick={this.addPlayer.bind(this)}>Ajouter</button>
            </div>
            <div>
                <Link to="/target">Commencer !</Link>
            </div>
        </div>
    }

    nameChanged(event){
        this.setState({nameToAdd: event.target.value});
    }

    addPlayer(){
        if(this.state.nameToAdd !== ''){
            this.props.addPlayer({name: this.state.nameToAdd});
            this.setState({nameToAdd: ''});
        }
    }
}

function mapStateToProps(store){
    console.log('mapstatetoprops')
    let players = [];

    if(typeof store.players.players !== 'undefined'){
        players = store.players.players;
    }

    return {players};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addPlayer: AddPlayer
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (PlayersPage);