import React , {useState} from 'react'
import {FormControl, RadioGroup, FormControlLabel, TextField ,FormLabel ,Radio,Button, FormGroup , Checkbox, Modal,  Badge ,Typography , ButtonGroup ,Box ,Slider } from '@mui/material'
import { useRef} from "react";
import emailjs from '@emailjs/browser';

const Greet = () => {
  const [inputs,setInputs]=useState({stage:'', checkbox1 : "", Bussiness:''});

  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);
  const [count2, setCount2] = React.useState(1);

  const [ data, setData] = React.useState(2)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const changeHandler = (event, data)=>{
    setData(data)
    
   }
   const form = useRef();


   const [user, setUser] = useState({
     name: '',
     email: '',
     phone: '',
     comment: '',
     check:" "
   });

   const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return { ...user, [name]: value }
    })
  };



  const handleChange =(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value
    }))
}
const handledChange =(count,count1,count2)=>{
    setCount(count)
    setCount1(count1)
    setCount2(count2)
}
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const handleBySubmit = (event) => {
 

  emailjs.sendForm('service_ux5qoha', 'template_2b8s7y4', form.current, 'TbRur4hHILvmWbnzw')
  .then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
  });
  event.target.reset();
      console.log(user);
    event.target.reset()
      alert('form submitted')  
};
 
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs , count + " " +"Middle Developer , " +count1 + " " + "Senior Developer , "+ count2 + " " + "Team Lead ,", data);
   
}



  return (
    <div><form onSubmit={handleSubmit}>


<Box sx={{color: "action.active",display: "flex",flexDirection: "column","& > *": {marginBottom: 2},
        "& .MuiBadge-root": {marginRight: 4}
      }}  
    >
        <FormLabel>1. React Developement team</FormLabel>
      <div>
      
        <ButtonGroup >
         <Button
            aria-label="reduce" onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
          </Button>
          <div  style={{ color: 'blue',lineHeight : 5,padding: 20,}}>
            <Badge style={{lineHeight : 20, fontSize: 14, color: "#4a54f1",}}  onChange ={handledChange} name="count" value={count} badgeContent={count}> </Badge>
          </div>
          <Button aria-label="increase"onClick={() => {
              setCount(count + 1);
            }}
          >
        </Button>
        <Typography>Middle Developer</Typography>
        </ButtonGroup>
          </div>
      <div>
        
      </div>
      <div>
        <ButtonGroup>
          <Button
            aria-label="reduce" onClick={() => {
              setCount1(Math.max(count1 - 1, 0));
            }}
          >
          </Button>
          <div  style={{ color: 'blue',lineHeight : 5,padding: 20,}}>
            <Badge style={{lineHeight : 20, fontSize: 14, color: "#4a54f1",}} onChange ={handledChange} name="count1" value={count1} badgeContent={count1}></Badge>
          </div>
          <Button aria-label="increase"onClick={() => {
              setCount1(count1 + 1);
            }}
          >
        </Button>
        <Typography>Senior Developer</Typography>
        </ButtonGroup>
          </div>
      <div>
        
      </div>
      <div>
        <ButtonGroup>
          <Button
            aria-label="reduce" onClick={() => {
              setCount2(Math.max(count2 - 1, 0));
            }}
          >
          </Button>
          <div  style={{ color: 'blue',lineHeight : 5,padding: 20,}}>
            <Badge style={{lineHeight : 20, fontSize: 14, color: "#4a54f1",}} onChange ={handledChange} name="count2" value={count2} badgeContent={count2}></Badge>
          </div>
          <Button aria-label="increase"onClick={() => {
              setCount2(count2 + 1);
            }}
          >
        </Button>
        <Typography >Team Lead</Typography>
        </ButtonGroup>
          </div>
      
    </Box>

       <FormControl >
      <FormLabel>2. Current stage of your development process</FormLabel>
      <RadioGroup
       defaultValue="female" onChange ={handleChange} name="stage">
        <FormControlLabel value="Prototype/Specification" control={<Radio />} label="Prototype/Specification" />
        <FormControlLabel value="Designed solution" control={<Radio />} label="Designed solution" />
        <FormControlLabel value="MVP" control={<Radio />} label="MVP" />
        <FormControlLabel value="Mature product" control={<Radio />} label="Mature product" />
        
      </RadioGroup>

          </FormControl>
    
      <FormGroup
            onChange ={handleChange} 
            >
                <FormLabel>3. Top-priority IT skills</FormLabel>
  <FormControlLabel value={"TypeScript"} name="checkbox1"control={<Checkbox />} label="TypeScript" /> 
  <FormControlLabel value={"Akita"} name="checkbox2" control={<Checkbox />} label="Akita" />
  <FormControlLabel value={"RxJs"}  name="checkbox3" control={<Checkbox />} label="RxJs" />
  <FormControlLabel value={"Apache ECharts"} name="checkbox4" control={<Checkbox />} label="Apache ECharts" />
  <FormControlLabel value={"Angular Material"}  name="checkbox5" control={<Checkbox />} label="Angular Material" />
  <FormControlLabel value={"NG Bootstrap"}  name="checkbox6" control={<Checkbox />} label="NG Bootstrap" />
  <FormControlLabel value={"RxAngular"}  name="checkbox7" control={<Checkbox />} label="RxAngular" />
  <FormControlLabel value={"Cypress"}  name="checkbox8" control={<Checkbox />} label="Cypress" />
  <FormControlLabel value={"Jest"} name="checkbox9" control={<Checkbox />} label="Jest" />
 
</FormGroup>

<FormControl >
      
      <RadioGroup
       defaultValue="Financial Services" onChange ={handleChange} name="Bussiness">
        <FormLabel>4. Business industry</FormLabel>
        <FormControlLabel value="Financial Services" control={<Radio />} label="Finalcial Services" />
        <FormControlLabel value="Ecommerce" control={<Radio />} label="Ecommerce" />
        <FormControlLabel value="Travel & Hospitality" control={<Radio />} label="Travel & Hospitality" />
        <FormControlLabel value="Telecom" control={<Radio />} label="Telecom" />
        <FormControlLabel value="Media & Entertainment" control={<Radio />} label="Media & Entertainment" />
        <FormControlLabel value="Enterprise" control={<Radio />} label="Enterprise" />
        <FormControlLabel value="Real Estate" control={<Radio />} label="Real Estate" />
        <FormControlLabel value="Healthcare" control={<Radio />} label="Healthcare" />
        <FormControlLabel value="iGaming" control={<Radio />} label="iGaming" />
        <FormControlLabel value="Logistic" control={<Radio />} label="Logistic" />
        <FormControlLabel value="eLearning" control={<Radio />} label="eLearning" />
        <FormControlLabel value="Retail" control={<Radio />} label="Retail" />
        <FormControlLabel value="Automotive" control={<Radio />} label="Automotive" />
        <FormControlLabel value="Manufacturing" control={<Radio />} label="Manufacturing" />
        <FormControlLabel value="Aviation" control={<Radio />} label="Aviation" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
              
      </RadioGroup>
     
    </FormControl>
   
    
         <Box sx={{ width: 300 }}>
         <FormLabel> 5. Duration of your project</FormLabel>
      <Slider
      value={data}
      onChange={changeHandler}
        aria-label="month"
        defaultValue={1}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={24}
      />
    </Box>
    
    
<div>
<Button  type='submit' onSubmit={handleSubmit} onClick={handleOpen} variant="contained">subscribe</Button>

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <section> 
        <h3>TO receive a quote ,please leave your contact details </h3>
        <h6>your personal data will be processed securely and won't be available to third parties</h6>
        <div className="container" >

          <form ref={form} onSubmit={handleBySubmit} className="--form-control --card --flex-center --dir-column">

            <div>
               <TextField
               type="text"
               placeholder="name"
               name="name"
               onChange={handleInput}
               variant="standard"
               value={user.name}             
                            />
            </div>
           <br/>

            <div >

              <TextField
              variant="standard"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleInput}
                value={user.email}
              />
             
            </div>
            <br/>

            <div>
            <TextField
            variant="standard"
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={handleInput}
            value={user.phone}/>

            </div>
           
            <h4>we will call you in ASAP or you can schedule a call  </h4>
            <div >
              <TextField
                variant="standard"
                type="text"
                placeholder="comment"
                name="comment"
                onChange={handleInput}
                value={user.subject}/>

            </div><br/>

           

            <button type="submit"  onSubmit={handleBySubmit} classname="btn btn-default btn-primary bold">send</button>
            <FormControlLabel control={<Checkbox onChange={handleInput} name="check" value={user.check}/>} label="I want to protect my data by signing an NDA" />
          </form>

        </div>
      </section>
        </Box>
        
      </Modal>
   
</div>  
    </form>
    </div>
  )
}

export default Greet