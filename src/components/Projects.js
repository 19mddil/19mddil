import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    List
} from 'reactstrap';
import Layout from './Layout';

const Projects = props => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Layout title='My Projects' className='container'>
                <p>Currently I am working on the following projects which are under development.</p>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1">www.freelancebangla.com</AccordionHeader>
                        <AccordionBody accordionId="1">
                            <h3>This is my Entrepreneurship Project</h3>
                            <p><i>To view the source code:</i> <a href='https://github.com/19mddil/FREELANCEBANGLA-MERN-LOCAL'>https://github.com/19mddil/FREELANCEBANGLA-MERN-LOCAL</a> </p>
                            <p><i>To visit the webpage:</i> <a href='https://www.freelancebangla.com'>https://www.freelancebangla.com</a> </p>
                            <p><i>The ghpages server:</i> <a href='https://19mddil.github.io/freelancebangla/'>https://19mddil.github.io/freelancebangla/</a></p>
                            <hr></hr>
                            The following features are under development
                            <List>
                                <li>
                                    Clients homepage to show filtered workers.
                                </li>
                                <li>
                                    Workers homepage to show filtered works.
                                </li>
                                <li>
                                    Notifications on many events
                                </li>
                                <li>
                                    Details of profiles
                                </li>
                                <li>
                                    Payment
                                </li>
                                <li>
                                    Time management and calculation for applications
                                </li>
                                <li>
                                    Email varification
                                </li>
                            </List>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">19mddil.github.io/ecommerce</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <h3>This is a MERN project</h3>
                            <p><i>To view the source code:</i> <a href='https://github.com/19mddil/ECOMMERCE-MERN-LOCAL'>https://github.com/19mddil/ECOMMERCE-MERN-LOCAL</a> </p>
                            <p><i>To visit the webpage:</i> <a href='https://19mddil.github.io/ecommerce/'>https://19mddil.github.io/ecommerce/</a> </p>
                            <hr></hr>
                            The following features are under development
                            <List>
                                <li>
                                    Customers homepage to show filtered products.
                                </li>
                                <li>
                                    Notifications on many events
                                </li>
                                <li>
                                    Details of profiles
                                </li>
                                <li>
                                    Payment
                                </li>
                                <li>
                                    Email varification
                                </li>
                            </List>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">19mddil.github.io/19mddil</AccordionHeader>
                        <AccordionBody accordionId="3">
                            <h3>This is a portfolio project</h3>
                            <p><i>To view the source code:</i> <a href='https://github.com/19mddil/19mddil'>https://github.com/19mddil/19mddil</a> </p>
                            <p><i>To visit the webpage:</i> <a href='https://19mddil.github.io/19mddil/'>https://19mddil.github.io/19mddil/</a> </p>
                            <hr></hr>
                            The following features are under development
                            <List>
                                <li>
                                    My many certificats are to be added.
                                </li>
                            </List>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Layout>
        </div>
    );
}

export default Projects;