import React, {useState} from 'react';
import {useRef } from 'react';
import emailjs from '@emailjs/browser';

const GetQuote = () => {
    const form = useRef();

    const[data,setData]=useState(
        {
         name:'',
         email:'',
         number:'',
         topic: {
            selects:'',
         }
        }
    );

    const getData =(event)=>{
        const {name, value} =event.target;
         setData((prev)=>{
            return{...data , [name] : value}
        })
    };
    
    const handleSubmit=(event)=>{
        event.preventDefault();

        emailjs.sendForm('service_ux5qoha', 'template_l28fgjj', form.current, 'TbRur4hHILvmWbnzw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          event.target.reset();
        console.log(data);
        
    }

  return (
    <div>
        
                <form ref={form} className="row" onSubmit={handleSubmit}>
                    <div className="form-group col-md-6">
                        <input type="text" onChange={getData} name='name' value={data.name} placeholder="Your Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email"  onChange={getData} name='email' value={data.email} placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="number"  onChange={getData} name = 'number' value={data.number} placeholder="Phone"/>
                    </div>
                    <div className="form-group col-md-6 selectOptions">
                        <select name="topic"  onChange={getData}>
                            <option >--Select a topic--</option>
                            <option value={data.selects} >Topic 1</option>
                            <option value={data.selects} >Topic 2</option>
                            <option value={data.selects} >Topic 3</option>
                        </select>
                    </div>
                      <div className="col-md-6">
                        <button type="submit" onSubmit={handleSubmit} className="btn btn-default btn-primary">Send Request</button>
                          
                        </div>
                </form>
            </div>
            
  )
}

export default GetQuote;
