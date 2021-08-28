import { createContext, useState } from "react";
import utils from '../../utils/utils';

const AppContext = createContext({});

export function AppProvider({children}) {
    const [ order, setOrder ] = useState({
        dish: [],
        beverage: [],
        dessert: []
    });
    const [ isValidOrder, setIsValidOrder ]  = useState(false);
    const [ customer, setCustomer ] = useState({
        name: null,
        address: null
    })

    function addOrderItem(orderData, key) {
        const newOrder = {...order};
        newOrder[key].push(orderData);
        setOrder(newOrder);
        updateIsOrderValid();
    }

    function removeOrderItem(orderId, key) {
        const newOrder = {...order};

        for(let i = 0; i < newOrder[key].length; i++) {
            if(newOrder[key][i].id === orderId) {
                newOrder[key].splice(i,1);
            }
        }
        setOrder(newOrder);
        updateIsOrderValid(newOrder);
    }

    function updateOrderItems(orderItem) {
        if(orderItem.quantity === 0) {
            removeOrderItem(orderItem.id, orderItem.type);
            return;
        }

        const newOrder = {...order};
        const changedArray = Array.from(newOrder[orderItem.type]);

        for(let i = 0; i < changedArray.length; i++) {
            if(changedArray[i].id === orderItem.id) {
                changedArray.splice(i,1,orderItem);
                newOrder[orderItem.type] = changedArray;
                setOrder(newOrder);
                return;
            }
        }
        addOrderItem(orderItem, orderItem.type);
        updateIsOrderValid(newOrder);
        console.log(newOrder);
    }

    function updateIsOrderValid(newOrder) {
        for(const key in newOrder) {
            if(newOrder[key].length === 0) {
                setIsValidOrder(false);
                return;
            };
        }
        setIsValidOrder(true);
    }

    return (
        <AppContext.Provider value={{
            order,
            isValidOrder,
            addOrderItem,
            removeOrderItem,
            updateIsOrderValid,
            customer,
            updateOrderItems
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;