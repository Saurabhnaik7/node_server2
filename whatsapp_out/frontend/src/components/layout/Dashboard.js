import React , { Fragment} from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="container">
        <Fragment>
          <h1 className="medium text-primary">Dashboard</h1>
          <br />
          <div className='dashboard bg-light'>
          <Link to={`/messages`}>
            <div>
                <p>Received Messages</p>
            </div>
          </Link>
          </div>
          <div className='dashboard bg-light'>
          <Link to={`/sentmessages`}>
            <div>
                <p>Sent Messages</p>
            </div>
          </Link>
          </div>
          <div className='dashboard bg-light'>
          <Link to={`#`}>
            <div>
                <p>User Profile</p>
            </div>
          </Link>
          </div>
        </Fragment>
    </section>
  )
}
export default Dashboard;