import React, {useState} from 'react';
import styles from './Search.module.css';

const Search = (props) => {
    const [city, setCity]= useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const [restaurantType, setRestaurantType] = useState('')
    const handleSearch = ()=> {
        console.log(city, restaurantType)
        props.searchData({city, restaurantType, searchType: selectedOption})
    }
    const hanldeSelection = (e) => {
        setSelectedOption(e.target.value)
        setCity('')
        setRestaurantType('')
    }
    return(
        <div  className={styles.container}>
        <div className={styles.panel}>
        <div className={styles.radio}>
          <label>
            <input type="radio" value="city" onChange={hanldeSelection}  checked={selectedOption === 'city'}  />
            City
          </label>
        </div>
        <div className={styles.radio}>
          <label>
            <input type="radio" value="restaurants" onChange={hanldeSelection} checked={selectedOption === 'restaurants'} />
            Restaurants
          </label>
        </div>
        </div>
        {selectedOption && <div className={styles.panel}>
        {selectedOption === 'city' && <input type="text"  className={styles.input} placeholder='City' onChange={(e) => setCity(e.target.value)} />}
        {selectedOption === 'restaurants' && <input type="text" className={styles.input} placeholder='Restaurants' onChange={(e) => setRestaurantType(e.target.value)} />}
        {selectedOption && <button type="submit" className={styles.button} onClick={handleSearch} >Search</button>}
        </div> }
        </div>
    )
}

export default Search