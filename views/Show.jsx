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
            Destination: {flights.destinations.map((destination) => {
                return(
                    <div key={destination.id}>
                        <li>
                       Airport: {destination.airport}
                    </li>
                        <li>
                        Arrival: {destination.arrival.toString()}
                    </li>
                    <hr/>
                    </div>
                    
                )
            })}
            <form action= {`/flights/${flights.id}`} method="POST">
            Airport: <select type='text' name='airport'>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAN</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
               </select>
               Arrival: <input type="datetime-local"  name="arrival" />
               <input type='submit' name='' value= 'Add Destination' />
               </form>
               <button> <a href='/flights'>Back</a></button>
        </main>
    )
}


module.exports = Show;