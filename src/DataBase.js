import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import { useRef } from "react";
// import emailjs from '@emailjs/browser';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

const DataBase = () => {
    const [user, setUser] = useState({
        cstage: " ",
            tosscheck1:"",
            tosscheck2:"",
            tosscheck3:"",
            tosscheck4:"",    
        busind: " ",
            pccheck1:"",
            pccheck2:"",
            pccheck3:"",
            pccheck4:"", 
        projectdur:" "
          
    });

    const [data, setData] = useState(2)

    const handleChange1 = (event, data) => {
        setData(data)
        console.log(data)
    }

    const handleChange = (event) => {
        setUser((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Box name="checkbox" role="group" >
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend"> What type of software solution would you like to develop with Andersen?</FormLabel>

                        <FormGroup onChange={handleChange}>

                            <FormControlLabel
                                value={"Desktop"}
                                name="tosscheck1"
                                control={<Checkbox />}
                                label="Desktop"
                            />
                            <FormControlLabel
                                value={"Mobile"}
                                name="tosscheck2"
                                control={<Checkbox />}
                                label="Mobile"
                            />
                            <FormControlLabel
                                value={"Web"}
                                name="tosscheck3"
                                control={<Checkbox />}
                                label="Web"
                            />
                            <FormControlLabel
                                value={"Consultancy needed"}
                                name="tosscheck4"
                                control={<Checkbox />}
                                label="Consultancy needed"
                            />

                        </FormGroup>

                    </FormControl>
                </Box>

                <Typography level="body2" fontWeight="lg" mb={1}>
                    What is the current stage of your software development process?
                </Typography>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="cstage"
                    onChange={handleChange}
                >
                    <Radio value={"Idea"} label="Idea" />
                    <Radio value={"Prototype/Specification"} label="Prototype/Specification" />
                    <Radio value={"Designed solution"} label="Designed solution" />
                    <Radio value={"MVP"} label="MVP" />
                </RadioGroup>


                <Box name="checkbox" role="group" >
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend"> Do you need a professional consultation from any of the specialists below?</FormLabel>
                        <FormGroup onChange={handleChange}>
                            <FormControlLabel
                                value={"Project Manager"}
                                name="pccheck1"
                                control={<Checkbox />}
                                label="Project Manager"
                            />
                            <FormControlLabel
                                value={"Business Analyst"}
                                name="pccheck2"
                                control={<Checkbox />}
                                label="Business Analyst"
                            />
                            <FormControlLabel
                                value={"UI/UX Designer"}
                                name="pccheck3"
                                control={<Checkbox />}
                                label="UI/UX Designer"
                            />
                            <FormControlLabel
                                value={"Architect"}
                                name="pccheck4"
                                control={<Checkbox />}
                                label="Architect"
                            />
                        </FormGroup>
                    </FormControl>
                </Box>

                <Typography level="body2" fontWeight="lg" mb={1}>
                    Please, specify your business industry
                </Typography>

                <Box>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="busind"
                        onChange={handleChange}
                    >
                        <Radio value={"Financial Services"} label="Financial Services" />
                        <Radio value={"eCommerce"} label="eCommerce" />
                        <Radio value={"Travel &amp; Hospitality"} label="Travel &amp; Hospitality" />
                        <Radio value={"Telecom"} label="Telecom" />
                        <Radio value={"Media &amp; Entertainment"} label="Media &amp; Entertainment" />
                        <Radio value={"Enterprise"} label="Enterprise" />
                        <Radio value={"Real Estate"} label="Real Estate" />
                        <Radio value={"Healthcare"} label="Healthcare" />
                        <Radio value={"iGaming"} label="iGaming" />
                        <Radio value={"Logistics"} label="Logistics" />
                        <Radio value={"eLearning"} label="eLearning" />
                        <Radio value={"Retail"} label="Retail" />
                        <Radio value={"Automotive"} label="Automotive" />
                        <Radio value={"Manufacturing"} label="Manufacturing" />
                        <Radio value={"Aviation"} label="Aviation" />
                        <Radio value={"Other"} label="Other" />
                    </RadioGroup>
                </Box>

                <Typography level="body2" fontWeight="lg" mb={1}>
                    What is the expected duration of your project?
                </Typography>

                <div >
                    <Typography gutterBottom>
                        {data}
                    </Typography>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            value={data}
                            onChange={handleChange1}
                            name="projectdur"
                            aria-label="month"
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={24}
                        />
                       
                    </Box>
                </div>
            </Box>
            <Button type='submit' varient="content" onSubmit={handleSubmit} >Submit</Button>
        </form>


    )
}

export default DataBase;