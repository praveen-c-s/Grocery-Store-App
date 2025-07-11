import React, { useState } from 'react'
import Nav from './Navbar'
import Navbar from './Navbar'

const View = () => {
    const [grocery, changeGrocery] = useState(
        [
        { "name": "tomato", "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7UH64K2_JbWj--JEDbWcTUfrwSvo7Xuk1tm4NYExO2VhZTWm8Qs1YdW1IctLimuJqONWxfLEUk3IIrtluNW1nDg" },
        { "name": "banana", "img": "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920-1024x683.jpg" },
        { "name": "potato", "img": "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg" },
        { "name": "parip", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N2IZKgtIoc2tGuAQ2GiMlRJxjKwzb8LShA&s" },
        { "name": "kadala", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHWFyZnYu8ZkqX03PtyxeCMBo77Ge1jtf0Q&s" },
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {grocery.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card" >
                                                <img src={value.img} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <p class="card-text">{value.name}</p>
                                                    <button className="btn btn-primary">add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }


                            )
                            }
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default View