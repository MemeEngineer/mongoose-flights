const React = require('react')

function Show(props){
    const {flights} = props
    return(
        <main>
            <h1>Details</h1>
            Airlne: {flights.airline}
            <br/>
            Flight#: {flights.flightNo}
            <br/>
            Depature: {flights.departs.toString()}
            <br/>
            Aiport: {flights.airport}
            <br/>
            Destination: {flights.destination}

        </main>
    )
}


module.exports = Show;