export default function PaymentCardsBankNamesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`payment-cards-bank-names`, params);
        },
    };
};
