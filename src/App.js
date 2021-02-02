import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';






const App = () => {
const [movies, setMovies] = useState([
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      Title: "I Am Legend",
      Year: "2007",
      Rated: "PG-13",
      Released: "14 Dec 2007",
      Runtime: "101 min",
      Genre: "Drama, Horror, Sci-Fi",
      Director: "Francis Lawrence",
      Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Language: "English",
      Country: "USA",
      Awards: "9 wins & 21 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      Metascore: "65",
      imdbRating: "7.2",
      imdbVote: "533,874",
      imdbID: "tt0480249",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
      ]
    },
    {
      Title: "300",
      Year: "2006",
      Rated: "R",
      Released: "09 Mar 2007",
      Runtime: "117 min",
      Genre: "Action, Drama, Fantasy",
      Director: "Zack Snyder",
      Writer: "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Language: "English",
      Country: "USA",
      Awards: "16 wins & 42 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNWMxYTZlOTUtZDExMi00YzZmLTkwYTMtZmM2MmRjZmQ3OGY4XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_SX300.jpg",
      Metascore: "52",
      imdbRating: "7.7",
      imdbVotes: "611,046",
      imdbID: "tt0416449",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
      ]
    },
    {
      Title: "The Avengers",
      Year: "2012",
      Rated: "PG-13",
      Released: "04 May 2012",
      Runtime: "143 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Joss Whedon",
      Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Language: "English, Russian",
      Country: "USA",
      Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Metascore: "69",
      imdbRating: "8.1",
      imdbVotes: "1,003,301",
      imdbID: "tt0848228",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      Title: "The Wolf of Wall Street",
      Year: "2013",
      Rated: "R",
      Released: "25 Dec 2013",
      Runtime: "180 min",
      Genre: "Biography, Comedy, Crime",
      Director: "Martin Scorsese",
      Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
      Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      Language: "English, French",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      Metascore: "75",
      imdbRating: "8.2",
      imdbVotes: "786,985",
      imdbID: "tt0993846",
      Type: "movie",
      Response: "True",
      Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
      ]
    },
    {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
      Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "937,412",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      ComingSoon: true,
      Title: "Doctor Strange",
      Year: "2016",
      Rated: "N/A",
      Released: "04 Nov 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Scott Derrickson",
      Writer: "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
      Actors: "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      Language: "English",
      Country: "USA",
      Awards: "N/A",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt1211837",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
      ]
    },
    {
      ComingSoon: true,
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      Rated: "N/A",
      Released: "16 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Gareth Edwards",
      Writer: "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
      Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      Plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      Language: "English",
      Country: "USA",
      Awards: "1 nomination.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3748528",
      Type: "movie",
      Response: "True",
      Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
      ]
    },
    {
      ComingSoon: true,
      Title: "Assassin's Creed",
      Year: "2016",
      Rated: "N/A",
      Released: "21 Dec 2016",
      Runtime: "N/A",
      Genre: "Action, Adventure, Fantasy",
      Director: "Justin Kurzel",
      Writer: "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
      Actors: "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
      Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      Language: "English",
      Country: "UK, France, USA, Hong Kong",
      Awards: "N/A",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzE1OTczNTc1OF5BMl5BanBnXkFtZTgwMzgyMDI3MDI@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt2094766",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
      ]
    }
  ]);
const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5745d7d8`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
    			setMovies(responseJson.Search);
    		}
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);


  return (
  	<div className="container-fluid movie-app">
      <div className="d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = 'MOVIEAPP' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row justify-content-center"><MovieList movies={movies}/>
  </div>
    </div>
  	);
  };


export default App;
