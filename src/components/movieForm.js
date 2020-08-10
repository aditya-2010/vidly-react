import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as GenresAPI from "../services/fakeGenreService";
import * as MoviesAPI from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "Action",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.required(),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(5).required().label("Rate"),
  };

  doSubmit = (e) => {
    // Call the server
    if (this.props.match.params.id)
      this.state.data["_id"] = this.props.match.params.id;

    MoviesAPI.saveMovie(this.state.data);
    this.props.history.push("/movies");

    console.log("Submitted");
  };

  render() {
    return (
      <div className="movie-form">
        <h1>Movie Form</h1>
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderSelect(
                "genre",
                "Genre",
                GenresAPI.getGenres().map((genre) => genre.name)
              )}
              {this.renderInput("numberInStock", "Number In Stock")}
              {this.renderInput("dailyRentalRate", "Rate")}

              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;
