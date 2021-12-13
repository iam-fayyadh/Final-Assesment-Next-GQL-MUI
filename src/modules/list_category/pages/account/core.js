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

    return (
        <Layout pageConfig={pageConfig || config} {...props}>
            <GuestView {...props} data={data} />
        </Layout>
    );
};

export default CustomerAccount;
