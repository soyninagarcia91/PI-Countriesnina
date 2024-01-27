import { useState } from "react";
import { Validation } from "./Validation";
import axios from "axios";

const ActivityCreator = () => {
  const [act, setAct] = useState({
    activity: "",
    difficulty: "",
    duration: "",
    country: "",
    season: "",
  });
  const [error, setError] = useState({
    activity: "",
    difficulty: "",
    duration: "",
    country: "",
    season: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAct({ ...act, [name]: value });
    setError(
      Validation({
        ...act,
        [name]: value,
      })
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const posteo = await axios.post("http://localhost:3002/activities", {
      act,
    });
    console.log(posteo);
  };

  return (
    <div>
      <h1>Create your activity!</h1>
      <form>
        <label>Activity:</label>
        <input
          name="activity"
          type="text"
          value={act.activity}
          onChange={handleChange}
        ></input>
        {error.activity && <p>{error.activity}</p>}
        <label>Duration:</label>
        <input
          name="duration"
          type="text"
          value={act.duration}
          onChange={handleChange}
        ></input>
        {error.duration && <p>{error.duration}</p>}
        <label>Country:</label>
        <input
          name="country"
          type="text"
          value={act.country}
          onChange={handleChange}
        ></input>
        {error.country && <p>{error.country}</p>}
        <select name="season">Season</select>
        <option>Summer</option>
        <option>Fall</option>
        <option>Winter</option>
        <option>Spring</option>

        <select name="difficulty">Difficulty</select>
        <option>1r</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>

        <button onSubmit={onSubmit}>Create</button>
      </form>
    </div>
  );
};

export default ActivityCreator;
