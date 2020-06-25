import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../action/fetchData'

import Search from '../component/search'
import List from '../component/list'

const ListPage = (props) => {
    console.log(props.posts)


  const handleSearchData = (value) => {
    console.log(value)
    props.dispatch(fetchData(value))
  }
  return (
    <section className='container-fluid'>
      <Search searchData = {handleSearchData} />
      <ul className="list-group">
        <li>
            <div className='listheader'>Name</div>
            <div className='listheader'>Area</div>
            <div className='listheader'>Address</div>
      </li>
      {props.posts && !props.posts.restaurants && <li className="message">No data </li>}
      {props.posts && props.posts.restaurants && props.posts.restaurants.map( data => {
          return <List key={data.id} data={data} />
      })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})
// Connect Redux to React
export default connect(mapStateToProps)(ListPage)