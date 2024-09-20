import { observer } from "mobx-react-lite";
import { useLandingContext } from "../manage/landingContext";

/* 
*/

export const ObservableDiv: React.FunctionComponent = observer(
    function ObservableDiv() {

        // You need this variable to access the global variables.
        const context = useLandingContext();

        return (
            <>
                {context?.getIsObserverButtonClicked() ?
                    <div>
                        Hello!
                    </div>
                :
                    <div>
                        Byeee!
                    </div>
                }
            </>
        );
    }
);
