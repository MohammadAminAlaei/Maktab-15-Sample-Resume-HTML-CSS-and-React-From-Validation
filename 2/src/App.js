import React, {Component} from 'react';
import {HeaderComponent} from "./assets/components/header/Header.component";
import {ShapesComponent} from "./assets/components/shapes/Shapes.component";
import {MainComponent} from "./assets/components/main/Main.component";

class App extends Component {

    render() {
        return (
            <div className={'container'}>
                <HeaderComponent/>
                <ShapesComponent/>
                <MainComponent/>
            </div>
        );
    }
}

export default App;