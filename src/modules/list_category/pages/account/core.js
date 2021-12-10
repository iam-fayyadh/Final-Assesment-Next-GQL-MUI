import Layout from '@layout';

import { getCmsBlocks } from '@core_modules/list_category/services/graphql';

const CustomerAccount = (props) => {
    const { t, GuestView, pageConfig } = props;

    const config = {
        title: t('customer:dashboard:pageTitle'),
        header: false, // available values: "absolute", "relative", false (default)
        bottomNav: 'account',
    };
    // const [actionReorder] = mutationReorder();
    const { data } = getCmsBlocks({ identifiers: ['pwa_footer'] });

    // const reOrder = (order_id) => {
    //     if (order_id && order_id !== '') {
    //         window.backdropLoader(true);
    //         actionReorder({
    //             variables: {
    //                 order_id,
    //             },
    //         })
    //             .then(async (res) => {
    //                 if (res.data && res.data.reorder && res.data.reorder.cart_id) {
    //                     await setCartId(res.data.reorder.cart_id);
    //                     setTimeout(() => {
    //                         router.push('/checkout/cart');
    //                     }, 1000);
    //                 }
    //                 window.backdropLoader(false);
    //             })
    //             .catch(() => {
    //                 window.backdropLoader(false);
    //             });
    //     }
    // };

    return (
        <Layout pageConfig={pageConfig || config} {...props}>
            <GuestView {...props} data={data} />
        </Layout>
    );
};

export default CustomerAccount;
