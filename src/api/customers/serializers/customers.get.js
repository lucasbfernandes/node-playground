const getSerializedGetObject = (customer) => {
    return {
        name: customer.name ? customer.name : ''
    }
    ;
};

const customersGetSerializer = {
    serializeGetCustomers: (customers) => {
        return customers.map((customer) => getSerializedGetObject(customer));
    }
};

export { customersGetSerializer };
