
const User = (props) => {
    return (
        <div className='userDisplay'>
            <h2 className='counter'>{props.data.id}/25</h2>
            <h2 id='name'>{props.data.name.first} {props.data.name.last}</h2>
            <h3 className='userData'>From: {props.data.city}, {props.data.country}</h3>
            <h3 className='userData'>Job Title: {props.data.title}</h3>
            <h3 className='userData'>Employer: {props.data.employer}</h3>
            <h3 className='userData'>Favorite Movies:</h3>
            <h3 className='userData'>1. {props.data.favoriteMovies[0]}</h3>
            <h3 className='userData'>2. {props.data.favoriteMovies[1]}</h3>
            <h3 className='userData'>3. {props.data.favoriteMovies[2]}</h3>
        </div>
    )
}

export default User;