import { customersModel } from "../model";

const getCustomersQuery = () => {
    return customersModel.find({});
};

export { getCustomersQuery };
