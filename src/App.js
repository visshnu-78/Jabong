import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/homepage'
import  {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import TopBar from './Components/topbar'
import PrivateRouter from './Routes/PrivateRouter'
import Admin from './Components/admin'
import Products from './Components/products';
import Favourites from './Components/favourites';
import Loader from './Components/loader'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      role: '',
      id: ''
    }
  }
  setRole = (variable) => {
    this.setState({role: variable})
  }
  setId = (variable) => {
    this.setState({id: variable})
  }
  // getValues = () => {
  //   fetch("https://mapi.makemytrip.com/clientbackend/entity/api/searchHotels?srcClient=DESKTOP",{
  //     method:"POST",
  //     body: JSON.stringify(
  //       {
  //         "requestType": "B2CAgent",
  //         "idContext": "B2C",
  //         "channel": "B2Cweb",
  //         "deviceId": "Chrome",
  //         "deviceType": "Desktop",
  //         "clientIp": "undefined",
  //         "appVersion": "79.0.3945.130",
  //         "bestOffersLimit": 2,
  //         "applicationId": "410",
  //         "expiryRequired": false,
  //         "pageContext": "DETAIL",
  //         "email": null,
  //         "countryCode": "IN",
  //         "cityCode": "CTXWA",
  //         "locationId": "CTXWA",
  //         "locationType": "city",
  //         "hotelIds": ["201709261236369673"],
  //         "bookingDevice": "DESKTOP",
  //         "checkin": "2020-03-03",
  //         "checkout": "2020-03-04",
  //         "currency": "INR",
  //         "loggedIn": false,
  //         "funnelSource": "HOTELS",
  //         "roomStayCandidates": [
  //           {
  //             "guestCounts": [
  //               {
  //                 "ageQualifyingCode": "10",
  //                 "count": "2"
  //               }
  //             ]
  //           }
  //         ],
  //         "responseFilterFlags": {
  //           "soldOutInfoReq": true,
  //           "staticData": true,
  //           "roomLevelDetails": true,
  //           "freeCancellationAvail": true,
  //           "bestCoupon": true,
  //           "priceInfoReq": true,
  //           "locus": true,
  //           "applyAbsorption": true,
  //           "topRatedCommentRequired": false,
  //           "walletRequired": true,
  //           "mmtPrime": false
  //         },
  //         "numberOfCoupons": 2,
  //         "couponCount": 2,
  //         "guestRecommendationEnabled": {
  //           "maxRecommendations": "1",
  //           "text": "true"
  //         },
  //         "summaryOnly": false,
  //         "visitorId": "92ca5f2e-fb13-4afb-b1e3-5d4ceca4b1e7",
  //         "visitNumber": 4,
  //         "domain": "B2C",
  //         "limit": 0,
  //         "numberOfSoldOuts": 0,
  //         "experimentData": "{APE:6,PAH:5,PAH5:T,WPAH:F,BNPL:T,MRS:T,PDO:PN,MCUR:T,ADDON:T,CHPC:T,AARI:T,NLP:Y,RCPN:T,EMIDT:2}",
  //         "srcClient": "DESKTOP",
  //         "firstTimeUserState": 0,
  //         "mtKey": "defaultMtkey",
  //         "flowType": "B2C",
  //         "srCon": "DE",
  //         "paymentChannel": "B2C"
  //         }
  //     )
  //   }).then(data=>console.log(data))
  // }
  // componentDidMount() {
  //   // console.log(this.state.id)
  //   fetch("https://mapi.makemytrip.com/clientbackend/entity/api/searchHotels?srcClient=DESKTOP",{
  //     method:"POST",
  //     body: JSON.stringify(
  //       {
  //         "requestType": "B2CAgent",
  //         "idContext": "B2C",
  //         "channel": "B2Cweb",
  //         "deviceId": "Chrome",
  //         "deviceType": "Desktop",
  //         "clientIp": "undefined",
  //         "appVersion": "79.0.3945.130",
  //         "bestOffersLimit": 2,
  //         "applicationId": "410",
  //         "expiryRequired": false,
  //         "pageContext": "DETAIL",
  //         "email": null,
  //         "countryCode": "IN",
  //         "cityCode": "CTXWA",
  //         "locationId": "CTXWA",
  //         "locationType": "city",
  //         "hotelIds": ["201709261236369673"],
  //         "bookingDevice": "DESKTOP",
  //         "checkin": "2020-03-03",
  //         "checkout": "2020-03-04",
  //         "currency": "INR",
  //         "loggedIn": false,
  //         "funnelSource": "HOTELS",
  //         "roomStayCandidates": [
  //           {
  //             "guestCounts": [
  //               {
  //                 "ageQualifyingCode": "10",
  //                 "count": "2"
  //               }
  //             ]
  //           }
  //         ],
  //         "responseFilterFlags": {
  //           "soldOutInfoReq": true,
  //           "staticData": true,
  //           "roomLevelDetails": true,
  //           "freeCancellationAvail": true,
  //           "bestCoupon": true,
  //           "priceInfoReq": true,
  //           "locus": true,
  //           "applyAbsorption": true,
  //           "topRatedCommentRequired": false,
  //           "walletRequired": true,
  //           "mmtPrime": false
  //         },
  //         "numberOfCoupons": 2,
  //         "couponCount": 2,
  //         "guestRecommendationEnabled": {
  //           "maxRecommendations": "1",
  //           "text": "true"
  //         },
  //         "summaryOnly": false,
  //         "visitorId": "92ca5f2e-fb13-4afb-b1e3-5d4ceca4b1e7",
  //         "visitNumber": 4,
  //         "domain": "B2C",
  //         "limit": 0,
  //         "numberOfSoldOuts": 0,
  //         "experimentData": "{APE:6,PAH:5,PAH5:T,WPAH:F,BNPL:T,MRS:T,PDO:PN,MCUR:T,ADDON:T,CHPC:T,AARI:T,NLP:Y,RCPN:T,EMIDT:2}",
  //         "srcClient": "DESKTOP",
  //         "firstTimeUserState": 0,
  //         "mtKey": "defaultMtkey",
  //         "flowType": "B2C",
  //         "srCon": "DE",
  //         "paymentChannel": "B2C"
  //         }
  //     )
  //   }).then(data=>data.json())
  //   .then(data=>console.log(data))
  // }
  render() {
  return (
    <div>
      <Router>
        <TopBar role={this.setRole} id={this.setId}/>
        <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path = '/products'>
          <Products />
        </Route>
        <PrivateRouter exact path='/favourites'>
          {this.state.id? 
          <Favourites id={this.state.id}/>
          : <Loader/>
          }
        </PrivateRouter>
        {(this.state.role === "Admin")?
        <PrivateRouter exact path='/admin'>
          <Admin />
        </PrivateRouter>
        :<HomePage />
  }
</Switch>
     </Router>
    </div>
  );
  }
}

export default App;
