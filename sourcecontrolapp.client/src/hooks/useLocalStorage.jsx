import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

        try {

            let item = localStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue;

        }
        catch (err) {

            console.log(err);
            return initialValue;

        }


    });

    const setItem = (x) => {

        try {

            localStorage.setItem(key, JSON.stringify(x));
            setState(x);

        }
        catch (err) {

            console.log(err);

        }

    }

    return [

        state,
        setItem,

    ];

};

export default useLocalStorage;