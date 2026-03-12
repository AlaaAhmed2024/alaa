
import Sidebar from './components/Sidebar';
import Project1 from './Project1';
import Nave from './components/Nave';
import {BrowserRouter , Route , Routes , HashRouter } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Clients from './components/clients';
import Add from './components/add';
import Profit from './components/profit';
import Plus from './components/Plus';
import NetSalary from './components/NetSlary';
import "./Project1.css"
import { useState , useContext} from 'react';
import Login from './components/Login';
import Register from './components/register';
import { UseData } from "./App"
import'./App.css'
import Banks from './components/Banks';
import Addto from './components/addto';
import Price from './components/Price';
import AddOffers from './offers/addOffers';
import Eskan from './Eskan/Eskan';

import OffersAll from './offers/OffersDetails2';
import ShowOffersAll from './offers/showOffesDetails';
import AddOffersDetails from './offers/addOfferDetails';
import NotFound from './notFound';
import UserDashboard from './UserDashboard';
import ShowDocuments from './Eskan/ShowDocuments';
import ShowClient from './offers/showClient';
import AddClient from './offers/addClient';
import OfferDetails from './offers/OfferDetails';
import SaudiNeighborhoodMain from './game/SaudiNeighborhoodMain';
import RealEstateMap from './offers/realEstateMap';
import NewsDetails from './components/HomeDetails';
import PageTransition from './PageTransition';


 function Calculations(props){
   
var  photoUser2 = props.passPhoto



    const data =useContext(UseData)
    if(data)
      {
          
        return(
          // <BrowserRouter>
            <HashRouter>
             <div>
             
               <Sidebar>
                  <Nave passPhoto2={photoUser2 }/>
                  
                  <Routes>
                    <Route path='/start' Component={Home}/>
                    <Route path='/price' Component={Price} />
                    <Route path='/about' Component={About}/>
                    <Route path='/login' Component={Project1 } />
                    <Route path='/clients' Component={Clients}/>
                    <Route path='/add' Component={Add}/>
                    <Route path='/profit' Component={Profit}/>
                    <Route path='/plus' Component={Plus}/>
                    <Route path='/netsalary' Component={NetSalary}/>
                    <Route path='/banks' Component={Banks}/>

                    <Route path='/new_offer' Component={AddOffers}/>
                    <Route path='/new_documents' Component={Eskan}/>
                    <Route path='/show_documents' Component={ShowDocuments}/>
                    <Route path='/addto' Component={Addto}/>
                     <Route path='/offers' Component={OffersAll}/>
                     <Route path='/add-offers' Component={AddOffersDetails}/>
                           <Route path='/show-offers' Component={ShowOffersAll}/>
                              <Route path='/show-client' Component={ShowClient}/>
                                 <Route path='/add-client' Component={AddClient}/>
                     <Route path='/user-dashboard' Component={UserDashboard}/>


                       <Route path="/offers/:id" Component={OfferDetails } />


                       <Route path="/game" Component={SaudiNeighborhoodMain} />
                        <Route path="/real-estate-map" Component={RealEstateMap} />

                <Route
          path="/start/:id"
          element={
            <PageTransition>
              <NewsDetails />
            </PageTransition>
          }
        />



                     <Route path="*" Component={NotFound}  />
                </Routes>
              </Sidebar>
             </div>
            </HashRouter>
             // </BrowserRouter>
   
          
   )
    }else{
          var pathName =window.location.pathname
            return(
              <HashRouter>
                 <div className="App" style={{marginTop:"10px", marginBottom:"10px"}}>
                
                     <Routes>
                        {/* <Route path={pathName} Component={Project1}/>
                        <Route path="/offers/:id" Component={OfferDetails} /> */}

       
                  <Route path="/offers/:id" Component={OfferDetails} />
                  <Route path="*" Component={Project1} />  



                     </Routes>
              
                </div>
              </HashRouter>
            );
            
        }
    };


    
// const currentUrl = window.location.href;
// const baseOfferUrl = "https://alaaahmed2024.github.io/alaa/#/offers/";






//  if (currentUrl.startsWith(baseOfferUrl)) {
//   // هذا رابط تفاصيل عرض
//   return <OfferDetails />;



//   }else







  

export default Calculations;



