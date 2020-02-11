import React, {Component} from 'react';
import TopBar from './topbar';
import NavBar from './navbar';
import MainPage from './mainpage';
import Footer from './footer'

class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <MainPage />
                <Footer />
            </div>
        )
    }
}
export default home