import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { pink } from '@mui/material/colors';


const columns: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
    // editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 400,
  },

  {
    field: 'body',
    headerName: 'Body',
    sortable: false,
    width: 500,
  },
];
  


// const rows = [
//   { id: 1, user_id: 'Snow', title: 'Jon', body: "35" },
//   { id: 2, user_id: 'Lannister', title: 'Cersei', body: "42" },
//   { id: 3, user_id: 'Lannister', title: 'Jaime', body: "45" }]

export default function SecondPage() {


const [name,setName]= useState('');
const [data,setData]=useState('');
  const getData = ()=>{
    const data = JSON.parse(localStorage.getItem('formData'));
    let firstName = data.firstName;
    setName(firstName);
  }
  const removeData = ()=>{
    localStorage.removeItem('formData')
    window.location.href='/'
    setName('');
  }

  const logout = ()=>{
    window.location.href = '/'
  }

  const getApiData = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data.json().then((data)=>{setData(data);console.log(data)});  
  }

  useEffect(()=>{
    getData();
    getApiData();
  },[]);

  return (
    <div>
    <h3 >Second Page <span style={{color:'blue'}}>{name}</span>
          &nbsp;&nbsp;

            <button onClick={removeData}>sign out</button>&nbsp;&nbsp;
            <button onClick={logout}>log out</button>


    
       </h3>

    <Box sx={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        />
    </Box>
          <hr/><hr/>
    <Component2/>
        </div>
  );
}



function Component2(){
  const [checked, setChecked] = useState([false, true]);
  const [parent,setParent]=useState([false,true]);
  const departmentsData = [
          {
            "department": "customer_service",
            "sub_departments": [
              "support",
              "customer_success"
            ]
          },
          {
            "department": "design",
            "sub_departments": [
              "graphic_design",
              "product_design",
              "web_design"
            ]
          },
          {
            "department": "Business Service",
            "sub_departments": [
              "Accounting",
              "Career planning",
              "Commercial Printing"
            ]
          },
            {
            "department": "agriculture & fishing",
            "sub_departments": [
              "agriculture",
              "corps",
              "farming animals"
            ]
          }
  ];
  const handleChange = (event) => {

      setChecked([event.target.checked, event.target.checked]);

      
  };

  return <>
      <h4 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Component 2</h4>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 15 }}>

      {departmentsData.map((data) => (
        <div key={data.department}>

      <FormControlLabel
             control={<Checkbox  
              checked={checked[0] && checked[1]}
              onChange={handleChange}
                        />} 
                label={data.department} />
        
          {/* <h5>{data.department}</h5> */}
          <ul>
            {data.sub_departments.map((subDepartment) => (

              <li style={{listStyle:'none'}} key={subDepartment}>
                
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 5 }}>
             <FormControlLabel value={subDepartment}
                               control={<Checkbox 
                                         checked = {checked[0]}
                                         onChange={()=>{
                                        setChecked(checked[1]);
                                      }}
                                    
                                     sx={{
                                      color: pink[800],
                                      '&.Mui-checked': {
                                        color: pink[600],
                                      },
                                    }}
                                  
                               />} 
                               label={subDepartment} 
                              
              />
              </Box>

                {/* {subDepartment} */}
                </li>
            ))}
          </ul>
        </div>
      ))}
     

      </Box>
    </>

}
