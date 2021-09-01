import React from "react"
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'
import {Preloader} from '../components/Preloader'



class Main extends React.Component  {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=54f72760&s=tom and jerry")
          .then(response => response.json())
          .then(data => this.setState({movies: data.Search}));
    }
    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=54f72760&s=${str}`)
          .then(response => response.json())
          .then(data => this.setState({movies: data.Search}));
    }

    render () {
        const {movies} = this.state;

        return <main className= 'contaner content'>
            <Search searchMovies ={this.searchMovies} />
            {
               Movies.length ? (
               <Movies movies={this.state.movies}/>
               
               ): <Preloader />
            }
            
        </main>

    }
    

}

export {Main}