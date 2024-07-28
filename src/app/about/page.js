import React from 'react';
import { Carousel } from 'antd';

function About() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>Slide 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Slide 4</h3>
      </div>
    </Carousel>
  );
}

export default About;

/*import React from 'react';
import styles from "./page.module.css"

function About() {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Director'
    },
    {
      id: 2,
      name: 'Jane Doe',
      title: 'Managing Director'
    }
  ];
  const listItems = data.map((employee) => 
    <li key={employee.id.toString()} className={styles.li}>
      {employee.name} | {employee.title}
    </li>
  );
  return (
    <div className={styles.container}>
      <h1>This is the About Page</h1>
      <p>Below are our staff members:</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default About;*/
