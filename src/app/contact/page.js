"use client";
import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Radio, Button } from 'antd';

const { Option } = Select;

function Contact() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSelectChange = (value, name) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1>This is the Contact Page</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="First Name">
          <Input name="firstName" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Middle Name">
          <Input name="middleName" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input name="lastName" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Student ID Number">
          <Input name="idNumber" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Date of Birth">
          <DatePicker
            onChange={(date, dateString) =>
              handleSelectChange(dateString, 'dob')
            }
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Select onChange={(value) => handleSelectChange(value, 'gender')}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Email Address">
          <Input name="email" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Is Enrolled">
          <Radio.Group
            onChange={(e) =>
              handleSelectChange(e.target.value, 'isEnrolled')
            }
          >
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact;



/*"use client"

import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState('');

  const handleChange = (e) =>{
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(name);
    e.preventDefault();
  };

  return (
    <div>
      <h1>This is the contact us page</h1>
      <p>This is the contact us page content.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange}/> Name:
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}*/