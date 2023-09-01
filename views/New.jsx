const React = require('react')

function New(props){
 const {departsDate} = props
    return(
        <div>
            <h1>New Flight</h1>
            <form action= "/flights" method="POST">
               Airline: <select type='text' name='airline'>
                <option value="American">American</option>
                <option value="United">United</option>
                <option value="Southwest">Southwest</option>
               </select>
               <br/>
               FlightNo: <input type= 'number' min="10" max="9999" name='flightNo' />
               <br/>
               Departs:  <input type="datetime-local" defaultValue= {departsDate}/>
               <br/>
               <input type='submit' name='' value= 'Create Flight' />
            </form>
            <button> <a href='/flights'>Back</a></button>
        </div>
    )
}


module.exports = New;