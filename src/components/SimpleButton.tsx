import { Button } from "@fluentui/react-components";
import styles from "./SimpleButton.module.css"; // This is how you import the styles from your .module.css file

/*
This is a simple example of a react component.
This created a button that you can re-use!
*/
export const SimpleButton: React.FunctionComponent = () => {

    /* You will always need a return method to return your component. 
       Note that you can only return ONE component.

       - Allowed:
       '''
       return (
            <div>
                ... do stuff
            </div>
        );
        '''


        - NOT allowed (two components):
        '''
        return (
            <div>
                ... do stuff
            </div>
             <div>
                ... do stuff
            </div>
        );
        '''


        - Allowed (wrap two components inside empty <>):
        '''
        return (
            <>
                <div>
                    ... do stuff
                </div>
                 <div>
                    ... do stuff
                </div>
            </>
        );
        '''
    */
    
    return (
        // You can add styles via a class (check SimpleButton.module.css for class details)
        <div className={styles.simpleButtonDiv}>
            <Button
                appearance="subtle"
                // You can also add styles directly like this.
                style={{ height: "100%", border: "5px black", backgroundColor: "pink"}}
            >I am a simple button!</Button>
        </div>
    );
}
