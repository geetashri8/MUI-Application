// import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// //import './App.css'
// //import Box from "@mui/material/Box";
// //import Typography from "@mui/material/Typography";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
// } from '@mui/material';

// // 1️⃣ Create a custom theme with breakpoints
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 480,
//       md: 768,
//       lg: 1024,
//       xl: 1280,
//     },
//   },
// });



// const data = [
//   { id: 1, name: 'Alice', age: 25, location: 'Delhi' },
//   { id: 2, name: 'Bob', age: 30, location: 'Mumbai' },
//   { id: 3, name: 'Charlie', age: 28, location: 'Bangalore' },
// ];

// function ResponsiveTable() {
//   return (
//     <Box   sx={{
//     p: 2,
//     width:'100vw',
//     height:'100vh',
//     border:'5px solid red'

//   }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Responsive Table
//       </Typography>

//       <TableContainer component={Paper} sx={{backgroundColor:'grey'}}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
//               {/* Hide Age on xs */}
//               <TableCell
//                 sx={{
//                   fontWeight: 'bold',
//                   display: { xs: 'none', sm: 'table-cell' },
//                 }}
//               >
//                 Age
//               </TableCell>
//               {/* Hide Location on xs and sm */}
//               <TableCell
//                 sx={{
//                   fontWeight: 'bold',
//                   display: { xs: 'none', sm: 'none', md: 'table-cell' },
//                 }}
//               >
//                 Location
//               </TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {data.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell
//                   sx={{
//                     display: { xs: 'none', sm: 'table-cell' },
//                   }}
//                 >
//                   {row.age}
//                 </TableCell>
//                 <TableCell
//                   sx={{
//                     display: { xs: 'none', sm: 'none', md: 'table-cell' },
//                   }}
//                 >
//                   {row.location}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }


// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <ResponsiveTable />
//     </ThemeProvider>
//   );
// }
  

// import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// //import './App.css'
// //import Box from "@mui/material/Box";
// //import Typography from "@mui/material/Typography";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
// } from '@mui/material';

// // 1️⃣ Create a custom theme with breakpoints
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 480,
//       md: 768,
//       lg: 1024,
//       xl: 1280,
//     },
//   },
//   components:{
//     MuiTableCell:{
//       styleOverrides:{
//               head:{
//         '&.row-clomn':{
//           '@media (max-width:480px)':{
//             display:'none',
//           }
//         }
//       },
//             body:{
//         '&.row-clomn':{
//           '@media (max-width:480px)':{
//             display:'none',
//           }
//         }
//       },
//       }


//     }
//   }
// });

// export default function App(){
//   return(
// <ThemeProvider theme={theme}>
//     <Box>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell >COL1</TableCell>
//               <TableCell >COl2</TableCell>
//               <TableCell className="row-clomn">COL3</TableCell>
//               <TableCell className="row-clomn">COl4</TableCell>
//               <TableCell className="row-clomn">COL5</TableCell>
            
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell >ROW1</TableCell>
//               <TableCell >ROW1</TableCell>
//               <TableCell className="row-clomn">ROW1</TableCell>
//               <TableCell className="row-clomn">ROW1</TableCell>
//               <TableCell className="row-clomn">ROW1</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell >ROW2</TableCell>
//               <TableCell >ROW2</TableCell>
//               <TableCell className="row-clomn">ROW2</TableCell>
//               <TableCell className="row-clomn">ROW2</TableCell>
//               <TableCell className="row-clomn">ROW2</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
// </ThemeProvider>

//   );
// }

import './App.css';
import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  createTheme,
  styled
} from "@mui/material";

// Step 1: Create theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Step 2: Extend theme with component overrides
theme.components = {
  MuiCard: {
    styleOverrides: {
      root: {
        [theme.breakpoints.up("sm")]: {
          //backgroundColor: "#f8bbd0",
          display: "flex",
          gap: theme.spacing(1),
          height:'300px',
          width:'700px'
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
          border: "1px solid grey",
  borderRadius: "5px",
 
  padding: theme.spacing(0),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
          backgroundColor: "#f6d1bb",  // #f6d1bb, #f8bbd0, #f4b8a6
          display: "flex",
          marginLeft: theme.spacing(0),
          marginRight: theme.spacing(1),
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          flex:1,
        },
      },
    },
  },
      MuiCardMedia: {
      styleOverrides: {
        root: {
          
          height: '250px', // default
          borderRadius:'5px',
         // objectFit: 'cover',
          [createTheme().breakpoints.up('sm')]: {
            height: '85%', // larger screens
          },
        },
      },
    },
  
  MuiTypography: {
    styleOverrides: {
      root: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }
    }
  }
};

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#bbd1f6",
  border: "1px solid grey",
  borderRadius: "5px",
  display:'flex',
  flexDirection:'column',
  padding: theme.spacing(0),
  margin: theme.spacing(1),
  


  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(1),
        flexBasis: "35%",   // ✅ Take 35% of the card's width
    flexShrink: 0,      // Prevent it from shrinking
  },
}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <StyledBox>
          <CardMedia
            component="img"
            //height="200"
            image="https://compote.slate.com/images/73f0857e-2a1a-4fea-b97a-bd4c241c01f5.jpg"
            alt="profile"
          />
          <Divider />

          <Box
  sx={{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }}
>
  <Typography variant="h5">Penguins</Typography>
</Box>

        </StyledBox>

        <CardContent>
          <Typography>
            Penguins are flightless birds known for their distinctive black and
            white feathers and their upright, waddling walk. They are excellent
            swimmers and spend much of their time in the ocean hunting for fish,
            squid, and krill.
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
