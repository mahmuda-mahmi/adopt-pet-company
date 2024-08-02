/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Sidebar.css'

const Sidebar = ({cart, count}) => {
    return (
        <div className='sidebar'>
            <div>
                <h3>Your Pets</h3>
                <ol>
                    {
                        cart.map((cart, idx) => <li key={idx}>{cart}</li>)
                    }
                </ol>
                <hr />
                <h3>Total Pets: {count}</h3>
                <button>Confirm</button>
            </div>
        </div>
    );
};

export default Sidebar;