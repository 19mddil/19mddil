import React, { Component } from 'react';
import Layout from './Layout';
import { CardGroup, Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap';

const FavBooks = () => (
    <div>
        <Layout title='FavBooks' className='container'>
            <div>
                <div class="card-group" style={{ color: 'black' }}>
                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/js.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/db.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>

                </div>
                <div class="card-group" style={{ color: 'black' }}>
                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/java.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/linux.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>


                    <div class="card">
                        <img class="card-img-top" src="https://raw.githubusercontent.com/19mddil/19mddil/main/public/assets/img/c%2B%2B.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    </div >
)

export default FavBooks;