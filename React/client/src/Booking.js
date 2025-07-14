import 'bootstrap/dist/css/bootstrap.min.css';
function Bookings()
{
    return(
            <div>
                    <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
                        </div>
                        <div className="form-group col-md-6">
                            
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                    </div>
                    </form>
             </div>
            )
}
export default Bookings;
