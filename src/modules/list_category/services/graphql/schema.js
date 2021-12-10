/* eslint-disable import/prefer-default-export */

import { gql } from '@apollo/client';

export const getRegion = gql`
    query getRegions($country_id: String!) {
        getRegions(country_id: $country_id) {
            item {
                code
                name
                region_id
            }
        }
    }
`;

export const getCmsBlocks = gql`
    query($identifiers: [String]) {
        cmsBlocks(identifiers: $identifiers) {
            items {
                identifier
                title
                content
            }
        }
    }
`;

export const getCountries = gql`
    {
        countries {
            id
            full_name_locale
            full_name_english
        }
    }
`;

export const getCityByRegionId = gql`
    query Cities($regionId: Int!) {
        getCityByRegionId(region_id: $regionId) {
            item {
                id
                city
                postcode
            }
        }
    }
`;

export const customerWishlist = gql`
    query customerWishlist($sharing_code: ID) {
        customerWishlist(sharing_code: $sharing_code) {
            items {
                added_at
                description
                id
                product {
                    id
                    name
                    url_key
                    sku
                    small_image {
                        url
                    }
                    price_range {
                        minimum_price {
                            discount {
                                amount_off
                                percent_off
                            }
                            final_price {
                                currency
                                value
                            }
                            fixed_product_taxes {
                                amount {
                                    currency
                                    value
                                }
                                label
                            }
                            regular_price {
                                currency
                                value
                            }
                        }
                        maximum_price {
                            discount {
                                amount_off
                                percent_off
                            }
                            final_price {
                                currency
                                value
                            }
                            fixed_product_taxes {
                                amount {
                                    currency
                                    value
                                }
                                label
                            }
                            regular_price {
                                currency
                                value
                            }
                        }
                    }
                }
                qty
            }
            items_count
            name
            sharing_code
            updated_at
        }
    }
`;

export const shareWishlist = gql`
    mutation shareWishlist($emails: [ID]!, $message: String) {
        shareWishlist(input: { emails: $emails, message: $message })
    }
`;

// schema settingsPage

export const updateCustomer = gql`
    mutation updateCustomerSetting($isSubscribed: Boolean!) {
        updateCustomer(input: { is_subscribed: $isSubscribed }) {
            customer {
                is_subscribed
            }
        }
    }
`;

export const getCustomerSettings = gql`
    {
        customer {
            firstname
            lastname
            email
            is_subscribed
        }
    }
`;

export const changeCustomerPassword = gql`
    mutation changeCustomerPassword($currentPassword: String!, $newPassword: String!) {
        changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
            firstname
            lastname
            email
        }
    }
`;

export const getCartIdUser = gql`
    {
        customerCart {
            id
        }
    }
`;

export const setNewPassword = gql`
    mutation($password: String!, $confirmPassword: String!, $token: String!) {
        setNewPassword(input: { password: $password, password_confirmation: $confirmPassword, token: $token }) {
            info
        }
    }
`;

export const getCustomerOrder = gql`
    {
        customerOrders(pageSize: 5) {
            items {
                id
                grand_total
                order_number
                status
                status_label
                created_at
                detail {
                    global_currency_code
                    shipping_address {
                        firstname
                        lastname
                    }
                    grand_total
                }
            }
        }
    }
`;

export const reOrder = gql`
    mutation reOrder($order_id: String!) {
        reorder(input: { order_id: $order_id }) {
            cart_id
        }
    }
`;

export const getCategories = gql`
    query {
        categoryList(filters: {}) {
            uid
            name
            image
            url_key
        }
    }
`;
export const subscribeToNewsLetter = gql`
    mutation($email: String!) {
        subscribeEmailToNewsletter(email: $email) {
            status
        }
    }
`;
