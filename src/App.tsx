import React from 'react';
import './App.css';
import { SimpleButton } from './components/SimpleButton';
import { ObservableButton } from './components/ObservableButton';
import { ObservableDiv } from './components/ObservableDiv';
import { observer } from "mobx-react-lite";

export const App: React.FunctionComponent = observer(
    function App() {
        return (
            <div className="App">
                <h1>This is a simple React/Typescript app to help get you started :)</h1>
                <p>Here are some examples of components to help you build your own!</p>

                <div>
                    <p>Bellow is a simple button component. It does nothing.</p>
                    <SimpleButton></SimpleButton>
                </div>

                <div>
                    <p>Bellow is a slightly more complicated component. The button is an icon and clicking it makes a component change text!</p>
                    <ObservableButton />
                    <ObservableDiv />
                </div>
            </div>
        );
    }
);
