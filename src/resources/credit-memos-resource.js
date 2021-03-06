export default function CreditMemosResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`credit-memos`, params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`credit-memos/${id}`, params);
        },

        getAllTransactions({id}) {
            return apiHandler.getAll(`credit-memos/${id}/transactions`);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`credit-memos/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`credit-memos/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`credit-memos/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`credit-memos/${id}/timeline`, '', data);
        },
    };
};
