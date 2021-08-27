import { createContext, useState } from "react";
import utils from '../../utils/utils';

const AppContext = createContext({});

export function AppProvider({children}) {
    const [ order, setOrder ] = useState({
        dish: null,
        beverage: null,
        dessert: null
    });
    const [ isValidOrder, setIsValidOrder ]  = useState(false);
    const [ customer, setCustomer ] = useState({
        name: null,
        address: null
    })

    function addOrderItem(itemData, key) {
        const newOrder = {...order};

        newOrder[key] = {
            name: itemData.name,
            price: itemData.price
        }

        setOrder(newOrder);
    }

    function updateIsOrderValid() {
        for(const key in order) {
            if(order[key] == null) return;
        }

        setIsValidOrder(true);
    }

    return (
        <AppContext.Provider value={{
            order,
            isValidOrder,
            addOrderItem,
            updateIsOrderValid,
            customer
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;