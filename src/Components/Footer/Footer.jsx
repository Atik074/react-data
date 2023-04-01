import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <ol className='order-list'>
            <li className='fs-4 text-primary mb-2'>what are the diffecence between Props and State ?</li>
            <p className='fs-5 text-success'>Ans: Props are used in react to pass data from one Component to another Components.It is unidirectional and immutable or read only.You can pass any data or function or javascript valid value by Props <br/>
            States are write only,mutable,it changed by asynchronusly.It is used rendering data dynamically from components.You can't access by child components
            </p>
            <li className='fs-4 text-primary mb-2'>How does work  UseState  ?</li>
            <p className='fs-5 text-success'>Ans: UseState c returns a array and contains two values.You can pass initial value in UseState.It allows to create ,tract and update state</p>
            <li className='fs-4 text-primary mb-2'>How does work UesEffect ? </li>
            <p className='fs-5 text-success'>Ans: UseEffect are worked  re-rendering components to do something.It takes no paremeter and returns a function.we can pass a dependencies value in UseEffect</p>
            <li className='fs-4 text-primary mb-2'>How does   React work?</li>
            <p className='fs-5 text-success'>Ans:React js is one of the most popular library of Javascript.It works  more fast and flexible and more interactive for UI design.User can create Components for his requirment to meaningfull website.Each component contains props to data pass from one component to another components.It's a open source front end based library. </p>
            </ol>
        </div>
    );
};

export default Footer;