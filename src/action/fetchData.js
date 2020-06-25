
export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({
  type: GET_POSTS,
})

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})


export function fetchData(value) {
  let url = ''
  if(value.searchType === 'city') {
     url = `http://opentable.herokuapp.com/api/restaurants?city=${value.city}&dinner`
  }
  else {
    url = `http://opentable.herokuapp.com/api/restaurants?name=${value.restaurantType}&dinner`
  }
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch(url)
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}