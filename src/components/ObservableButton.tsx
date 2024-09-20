import { Button } from "@fluentui/react-components";
import { AnimalTurtleRegular } from "@fluentui/react-icons"; //This library has icons you can use! Check the catalog here: https://react.fluentui.dev/?path=/docs/icons-catalog--docs
import { observer } from "mobx-react-lite";
import { useLandingContext } from "../manage/landingContext";

/*
This is a demo on how to create a custom component with an observer!
The observer allows you to "watch" for changes in the global variables. 
*/

export const ObservableButton: React.FunctionComponent = observer(
    function ObservableButton() {

        // You need this variable to access the global variables.
        const context = useLandingContext();

        return (
            <Button
                icon={<AnimalTurtleRegular />}
                onClick={() => {
                    context?.setIsObserverButtonClicked(
                        !context?.getIsObserverButtonClicked()
                    );
                }}
                appearance="subtle"
                style={{ height: "100%" }}
            ></Button>
        );
    }
);
