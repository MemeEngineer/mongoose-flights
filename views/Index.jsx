const React = require('react')

function Index(props){
    const {flights} = props
    const today = new Date()
    console.log(today)
    return(
        <main>
            <nav>
    <a href="/flights/new">Create a New Flight</a>
</nav>
            <h1> Flights Page</h1>
            <ul>
                {flights.map((flight,i) => {
                    return(
                        <li key={flight._id}>
                            Airline: 
                            <a href={`/flights/${flight._id}`}> {flight.airline}</a>
                            <br/> {''}
                            Flight#: {''}
                            {flight.flightNo}
                            <br/>
                            <div style={{color: `${flight.departs > today ? 'black' : 'red'}` }}>Depature: {flight.departs.toString()}</div>
                            <hr/>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

module.exports = Index;