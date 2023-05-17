import React, { Component } from 'react';
import Layout from './Layout';
import { CardGroup, Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap';

const FavBooks = () => (
    <div>
        <Layout title='FavBooks' className='container'>
            {/* <div  >
                <div class="card-group" style={{ color: 'black' }}>
                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/js.png" alt="Card image cap" />

                    </div>
                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/db.png" alt="Card image cap" />

                    </div>
                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c.png" alt="Card image cap" />

                    </div>

                </div>
                <div class="card-group" style={{ color: 'black' }}>
                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/java.png" alt="Card image cap" />

                    </div>
                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/linux.png" alt="Card image cap" />

                    </div>


                    <div class="card" style={{ width: "80%", height: "80%" }}>
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c%2B%2B.png" alt="Card image cap" />

                    </div>
                </div>
            </div> */}
            <div >
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/js.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/db.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/java.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/linux.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
                <img src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c%2B%2B.png" alt="Card image cap" style={{ display: 'inline-block', width: "30%", height: "30%" }} />
            </div>
        </Layout >
    </div >
)

export default FavBooks;