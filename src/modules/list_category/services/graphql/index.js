import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import * as Schema from '@core_modules/list_category/services/graphql/schema';
import { getLoginInfo } from '@helper_auth';

let isLogin = 0;
if (typeof window !== 'undefined') {
    isLogin = getLoginInfo();
}

const config = {
    context: {
        request: 'internal',
    },
};

export const getCustomerOrder = () => useQuery(Schema.getCustomerOrder, {
    context: {
        request: 'internal',
    },
});

export const getCustomerSettings = () => useQuery(Schema.getCustomerSettings, {
    context: {
        request: 'internal',
    },
});

export const customerWishlist = (options) => useLazyQuery(Schema.customerWishlist, {
    ...options,
    ...config,
});

export const shareWishlist = (options = {}) => useMutation(Schema.shareWishlist, {
    ...options,
    ...config,
});

export const getCmsBlocks = (variables) => useQuery(Schema.getCmsBlocks, {
    variables,
    context: {
        request: isLogin ? 'internal' : '',
    },
    fetchPolicy: isLogin ? 'network-only' : 'cache-first',
    skip: typeof window === 'undefined',
});

export const getCustomerCartId = () => useLazyQuery(Schema.getCartIdUser, {
    context: {
        request: 'internal',
    },
    fetchPolicy: 'no-cache',
});

export const reOrder = () => useMutation(Schema.reOrder, {
    context: {
        request: 'internal',
    },
});

export const newPassword = () => useMutation(Schema.setNewPassword, {
    ...config,
});

export const getCategories = () => useQuery(Schema.getCategories);

export const subscription = (variable) => useMutation(Schema.subscribeToNewsLetter, variable);
