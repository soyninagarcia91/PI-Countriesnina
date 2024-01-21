

const ActivityCreator = () => {
    return(
        <div>
            <h1>Create your activity!</h1>
            <form>
                <label>Activity:</label>
                <input
                name="activity"
                type="text"
                ></input>
                <label>Difficulty:</label>
                <input
                name="difficulty"
                type="text"
                ></input>
                <label>Duration:</label>
                <input
                name="duration"
                type="text"
                ></input>
                <label>Country:</label>
                <input
                name="country"
                type="text"
                ></input>
                <select>
                    <label>Season</label>
                    <option>Summer</option>
                    <option>Fall</option>
                    <option>Winter</option>
                    <option>Spring</option>
                </select>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ActivityCreator